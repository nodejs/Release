#!/usr/bin/env node

'use strict';
// Generate Release Plan table for a given release line.
// Usage:
// node --harmony-temporal generateReleasePlan.cjs vxx

const schedule = require('./schedule.json');

const [,, version] = process.argv;

if (!Object.hasOwn(schedule, version)) {
	throw new Error(`Unknown version ${version}, accepted values are ${Object.keys(schedule)}`);
}

console.log(`_Draft schedule - all dates subject to change_

Version | Release Date | Releaser
--------|--------------| -------------`);

const { start, maintenance, lts } = schedule[version];

const ltsDateTime = lts && Temporal.PlainDate.from(lts);
const maintenanceDateTime = Temporal.PlainDate.from(maintenance);

const isNowDuringLTS = lts && Temporal.PlainDate.compare(Temporal.Now.plainDateTimeISO(), ltsDateTime) > 0;

const startOfCycle = isNowDuringLTS ? ltsDateTime : Temporal.PlainDate.from(start);
const endOfCycle = isNowDuringLTS ? maintenanceDateTime : ltsDateTime || maintenanceDateTime;

const weeks = isNowDuringLTS ? 4 : 2;

for (let i = startOfCycle; Temporal.PlainDate.compare(i, endOfCycle) === -1; i = i.add({ weeks })) {
	console.log(`${version}.x.x |  ${i}  | `);
}

if (lts) {
	console.log(
		`${version}.x.x (${isNowDuringLTS ? 'Maintenance' : 'LTS'} transition) |  ${
			isNowDuringLTS ? maintenance : lts
		}  | ${isNowDuringLTS ? '_No release_' : ''}`,
	);
}
