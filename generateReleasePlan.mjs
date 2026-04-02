#!/usr/bin/env node

// Generate Release Plan table for a given release line.
// Usage:
// node --harmony-temporal generateReleasePlan.mjs xx
// or
// node --harmony-temporal generateReleasePlan.mjs path/to/CHANGELOG_Vxx.md

import { open, readFile } from 'node:fs/promises'
const schedule = JSON.parse(await readFile(new URL('./schedule.json', import.meta.url), 'utf-8'));

let [,, version] = process.argv;

console.log(`_Draft schedule - all dates subject to change_

Version | Release Date | Releaser(s)
--------|--------------| -------------`);

let lastReleaseDate;
if (isNaN(version)) {
  const existingReleases = [];
  const releaseTitle = /^## (\d{4}-\d{2}-\d{2}), Version (\d+\.\d+\.\d+) ([^,]+), (.+)$/;
  const securityRelease = /^This is a security release\.$/;
  const fd = await open(version, 'r');
  let releaseType
  for await (const line of fd.readLines()) {
	const releaseTitleMatch = releaseTitle.exec(line);
	if (releaseTitleMatch) {
		const [, date, version, type, releasers] = releaseTitleMatch;
  		lastReleaseDate ??= Temporal.PlainDate.from(date);
		const versionStr = type === '(Current)' && type !== releaseType ? `${version} (LTS transition)` : version;
		existingReleases.unshift(` ${versionStr} | ${date} | ${releasers}`)
		releaseType = type;
	} else if (securityRelease.test(line)) {
		existingReleases[0] = existingReleases[0].replace(/^([^|]+) \|/, "$1 (Security) |");
	}
  }
  console.log(existingReleases.join('\n'))

  version = existingReleases[0].slice(1, existingReleases[0].indexOf('.'));
}
const versionKey = `v${version}`;

if (!Object.hasOwn(schedule, versionKey)) {
	throw new Error(`Unknown version ${version}, accepted values are ${Object.keys(schedule)}`);
}

const { start, maintenance, lts } = schedule[versionKey];

const ltsDateTime = lts && Temporal.PlainDate.from(lts);
const maintenanceDateTime = Temporal.PlainDate.from(maintenance);

const isNowDuringLTS = lts && Temporal.PlainDate.compare(Temporal.Now.plainDateTimeISO(), ltsDateTime) > 0;
const weeks = isNowDuringLTS ? 4 : 2;

const startOfCycle = lastReleaseDate?.add({ weeks }) ?? (isNowDuringLTS ? ltsDateTime : Temporal.PlainDate.from(start));
const endOfCycle = isNowDuringLTS ? maintenanceDateTime : ltsDateTime || maintenanceDateTime;


for (let i = startOfCycle; Temporal.PlainDate.compare(i, endOfCycle) === -1; i = i.add({ weeks })) {
	console.log(` ${version}.x.x |  ${i}  | `);
}

if (lts && (!lastReleaseDate || Temporal.PlainDate.compare(maintenance, lastReleaseDate) > 0)) {
	console.log(
		`${version}.x.x (${isNowDuringLTS ? 'Maintenance' : 'LTS'} transition) |  ${
			isNowDuringLTS ? maintenance : lts
		}  | ${isNowDuringLTS ? '_No release_' : ''}`,
	);
}
