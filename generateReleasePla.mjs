#!/usr/bin/env node

// Generate Release Plan table for a given release line.
// Usage:
// node generateReleasePlan.mjs xx
// or
// node generateReleasePlan.mjs path/to/CHANGELOG_Vxx.md

import { open, readFile } from 'node:fs/promises';
const schedule = JSON.parse(await readFile(new URL('./schedule.json', import.meta.url), 'utf-8'));

let [, , majorVersion] = process.argv;

const tableHeader = `
Version | Release Date | Releaser(s)
------- | ------------ | -----------`;
console.log(`_Draft schedule - all dates subject to change_\n${tableHeader}`);

function outputFutureReleaseSchedule(majorVersion, lastReleaseDate) {
  const versionKey = `v${majorVersion}`;

  if (!Object.hasOwn(schedule, versionKey)) {
    throw new Error(`Unknown version ${majorVersion}, accepted values are ${Object.keys(schedule)}`);
  }

  const { start, maintenance, lts } = schedule[versionKey];

  const ltsDateTime = lts && Temporal.PlainDate.from(lts);
  const maintenanceDateTime = Temporal.PlainDate.from(maintenance);

  const isNowDuringLTS = lts && Temporal.PlainDate.compare(Temporal.Now.plainDateTimeISO(), ltsDateTime) > 0;
  const weeks = isNowDuringLTS ? 4 : 2;

  const startOfCycle =
    lastReleaseDate?.add({ weeks }) ?? (isNowDuringLTS ? ltsDateTime : Temporal.PlainDate.from(start));
  const endOfCycle = isNowDuringLTS ? maintenanceDateTime : ltsDateTime || maintenanceDateTime;

  for (let i = startOfCycle; Temporal.PlainDate.compare(i, endOfCycle) === -1; i = i.add({ weeks })) {
    console.log(` ${majorVersion}.x.x |  ${i}  | `);
  }

  if (lts && (!lastReleaseDate || Temporal.PlainDate.compare(maintenance, lastReleaseDate) > 0)) {
    console.log(
      `${majorVersion}.x.x (${isNowDuringLTS ? 'Maintenance' : 'LTS'} transition) |  ${
        isNowDuringLTS ? maintenance : lts
      }  | ${isNowDuringLTS ? '_No release_' : ''}`,
    );
  }
}

if (isNaN(majorVersion)) {
  let hasOutputFutureScheduleYet = false;
  const existingReleases = [];
  const releaseTitle = /^## (\d{4}-\d{2}-\d{2}), Version (\d+\.\d+\.\d+) ([^,]+), (.+)$/;
  const securityRelease = /^This is a security release\.$/;
  const fd = await open(majorVersion, 'r');
  let releaseType, lastReleaseDate;
  for await (const line of fd.readLines()) {
    const releaseTitleMatch = releaseTitle.exec(line);
    if (releaseTitleMatch) {
      const [, date, version, type, releasers] = releaseTitleMatch;
      lastReleaseDate ??= Temporal.PlainDate.from(date);
      const wasLTSTransition = releaseType && type === '(Current)' && type !== releaseType;
      if (wasLTSTransition) {
		const majorVersion = existingReleases[0].slice(1, existingReleases[0].indexOf('.'));
        existingReleases[0] = existingReleases[0].replace('|', '(LTS transition) |');
        console.log(existingReleases.splice(0, Infinity, '', '</details>').join('\n'));
        outputFutureReleaseSchedule(majorVersion, lastReleaseDate);
		hasOutputFutureScheduleYet = true;
        console.log('\n\n<details><summary>Current</summary>\n\n' + tableHeader);
      }
      existingReleases.unshift(` ${version} | ${date} | ${releasers}`);
      releaseType = type;
    } else if (securityRelease.test(line)) {
      existingReleases[0] = existingReleases[0].replace('|', '(Security) |');
    }
  }
  console.log(existingReleases.join('\n'));
  if (!hasOutputFutureScheduleYet) {
	const majorVersion = existingReleases[0].slice(1, existingReleases[0].indexOf('.'));
	outputFutureReleaseSchedule(majorVersion, lastReleaseDate);
  }
} else {
  outputFutureReleaseSchedule(majorVersion);
}
