# Node.js Release Working Group

## Release schedule

| Release  | Status              | Codename    |Initial Release | Active LTS Start | Maintenance LTS Start | End-of-life               |
| :--:     | :---:               | :---:       | :---:          | :---:            | :---:                 | :---:                     |
| [6.x][]  | **Maintenance LTS** | [Boron][]   | 2016-04-26     | 2016-10-18       | 2018-04-30            | April 2019                |
| [8.x][]  | **Maintenance LTS** | [Carbon][]  | 2017-05-30     | 2017-10-31       | 2019-01-01            | December 2019<sup>1</sup> |
| [10.x][] | **Active LTS**      | [Dubnium][] | 2018-04-24     | 2018-10-30       | April 2020            | April 2021                |
| [11.x][] | **Current Release** |             | 2018-10-23     |                  |                       | June 2019                 |
| 12.x     | **Pending**         |             | 2019-04-23     | October 2019     | April 2021            | April 2022                |

Dates are subject to change.

* <sup>1</sup>: The 8.x *Maintenance* LTS cycle is currently scheduled to expire
  early on December 31, 2019 to align with the scheduled End-of-Life of
  OpenSSL-1.0.2.

<p><img src="schedule.svg" alt="LTS Schedule"/></p>

The Release schedule is available also as a [JSON][] file.

### End-of-Life Releases

| Release | Status              | Codename   |Initial Release | Active LTS Start | Maintenance LTS Start | End-of-life               |
| :--:    | :---:               | :---:      | :---:          | :---:            | :---:                 | :---:                     |
| v0.10.x | **End-of-Life**     | -          | 2013-03-11     | -                | 2015-10-01            | 2016-10-31                |
| v0.12.x | **End-of-Life**     | -          | 2015-02-06     | -                | 2016-04-01            | 2016-12-31                |
| [4.x][] | **End-of-Life**     | [Argon][]  | 2015-09-08     | 2015-10-01       | 2017-04-01            | 2018-04-30                |
| 5.x     | **End-of-Life**     |            | 2015-10-29     |                  |                       | 2016-06-30                |
| 7.x     | **End-of-Life**     |            | 2016-10-25     |                  |                       | 2017-06-30                |
| 9.x     | **End-of-Life**     |            | 2017-10-01     |                  |                       | 2018-06-30                |

## Mandate

The Release working group's purpose is:

* Management/execution of the release and support process for all releases.

Its responsibilities are:

* Define the release process.
* Define the content of releases.
* Generate and create releases.
* Test Releases
* Manage the LTS and Current branches including backporting changes to
  these branches.
* Define the policy for what gets backported to release streams.

The Release working group is structured into teams and membership in
the working group does not automatically result in membership in these
teams. These teams are:

* Releasers team
* LTS team
* CITGM team

The `releasers` team is entrusted with the secrets and CI access to be able
build and sign releases. **Additions to the releasers team must be approved
by the TSC following the process outlined in GOVERNANCE.md.**

The Long Term Support (LTS) team manages the process/content of LTS releases
and the required backporting for these releases. Additions to the LTS
team needs sign off from the rest of the LTS team.

The Canary in the Gold Mine (CITGM) team maintains CITGM as one of
the key sanity checks for releases. This team maintains the CITGM
repository and works to keep CITGM builds running and passing regularly.
This also includes maintaining the CI jobs in collaboration with the Build
Working Group.

## Release Plan

New semver-major releases of Node.js are cut from `master` every six months.
New even-numbered versions (e.g. v6, v8, v10, etc) are cut in April. New
odd-numbered versions (e.g. v5, v7, v9) are cut in October.

When a new *odd-numbered* major release is cut, the previous *even-numbered*
major version transitions to the Long Term Support plan.

Every major version covered by the LTS plan will be actively maintained for a
period of 18 months from the date it enters LTS coverage. Following those 18
months of active support, the major version will transition into "maintenance"
mode for 12 additional months.

The exact date that a release stream will be moved to LTS, moved between LTS
modes, or deprecated will be chosen no later than the first day of the month.
If it is to be changed, it will be done with no less than 14 days notice.

Given this schedule, there will be no more than two active LTS releases at any
given time, overlapping for a maximum period of six months.

Once a major version enters LTS coverage, new features (semver-minor) may only
be landed with consent of the Release working group. No semver-major
changes other than those required for critical security fixes may be landed.

Changes in an LTS-covered major version are limited to:

1. Bug fixes;
2. Security updates;
3. Non-semver-major npm updates;
4. Relevant documentation updates;
5. Certain performance improvements where the risk of breaking existing
   applications is minimal;
6. Changes that introduce large amount of code churn where the risk of breaking
   existing applications is low and where the change in question may
   significantly ease the ability to backport future changes due to the
   reduction in diff noise.

Generally changes are expected to live in a *Current* release for at least 2
weeks before being backported. It is possible for a commit to land earlier at
the discretion of the Release working group and the maintainers of the LTS branches.

Once a release moves into Maintenance mode, only ***critical*** bugs,
***critical*** security fixes, documentation updates, and updates to ensure
consistency and usability of the N-API across LTS releases will be permitted.
Unless a change is ***urgent*** it will be planned into a release once per
quarter. Such releases will only be made when necessary.

Note that while it is possible that critical security and bug fixes may lead to
*semver-major* changes landing within an LTS stream, such situations will be
rare and will land as *semver-minor* bumps in the LTS covered version.

Updates to ensure consistency and usability of the N-API across LTS releases
are allowed as it is important to ensure that N-API native modules can be used
across LTS versions in order to support adoption.

All LTS releases will be assigned a codename. A list of expected upcoming
codenames is available in [CODENAMES.md](./CODENAMES.md).

An odd-numbered major release will cease to be actively updated when the subsequent
even-numbered major release is cut. Depending on circumstances the project may
decide to provide an update to the odd-numbered release after the cutoff. However, 
there is no guarantee that any release will be made.

### Staging Branches

Every major version has three branches in the GitHub repository: a release branch
and two staging branches. The release branch is used to cut new releases. Only
members of the @nodejs/releasers team should land commits onto release branches.
The staging branches are used to land cherry-picked or backported commits from
master that need to be included in a future release. Only members of
@nodejs/releasers should land commits onto staging branches.

For example, for Node.js v10, there is a `v10.x` branch and a `v10.x-staging-patch`
and `v10.x-staging-minor` branch. When commits land in master that must
be cherry-picked for a future Node.js v10 release, all patch commits must be landed
in the `v10.x-staging-patch` branch while all semver-minor and patch commits must be
landed in the `v10.x-staging-minor` branch. When commits are backported for a future
Node.js v10 release, those must come in the form of pull requests opened against the
`v10.x-staging-minor` branch. **Commits are only landed in the `v10.x` branch when a
new `v10.x` release is being prepared.**

[Argon]: https://nodejs.org/download/release/latest-argon/
[Boron]: https://nodejs.org/download/release/latest-boron/
[Carbon]: https://nodejs.org/download/release/latest-carbon/
[Dubnium]: https://nodejs.org/download/release/latest-dubnium/
[4.x]: https://nodejs.org/download/release/latest-v4.x/
[6.x]: https://nodejs.org/download/release/latest-v6.x/
[8.x]: https://nodejs.org/download/release/latest-v8.x/
[10.x]: https://nodejs.org/download/release/latest-v10.x/
[11.x]: https://nodejs.org/download/release/latest-v11.x/
[JSON]: schedule.json

The working group members are the union of the LTS, Releasers
and CITGM team members listed below.

## LTS Team members

<!-- ncu-team-sync.team(nodejs/lts) -->

- [@addaleax](https://github.com/addaleax) - Anna Henningsen
- [@BethGriggs](https://github.com/BethGriggs) - Bethany Nicolle Griggs
- [@bnoordhuis](https://github.com/bnoordhuis) - Ben Noordhuis
- [@codebytere](https://github.com/codebytere) - Shelley Vohr
- [@ErisDS](https://github.com/ErisDS) - Hannah Wolfe
- [@Fishrock123](https://github.com/Fishrock123) - Jeremiah Senkpiel
- [@geek](https://github.com/geek) - Wyatt Preul
- [@gibfahn](https://github.com/gibfahn) - Gibson Fahnestock
- [@mhdawson](https://github.com/mhdawson) - Michael Dawson
- [@MylesBorins](https://github.com/MylesBorins) - Myles Borins
- [@othiym23](https://github.com/othiym23) - Forrest L Norvell
- [@rvagg](https://github.com/rvagg) - Rod Vagg
- [@sam-github](https://github.com/sam-github) - Sam Roberts
- [@shigeki](https://github.com/shigeki) - Shigeki Ohtsu
- [@srl295](https://github.com/srl295) - Steven R. Loomis
- [@trevnorris](https://github.com/trevnorris) - Trevor Norris
- [@yunong](https://github.com/yunong) - Yunong Xiao

<!-- ncu-team-sync end -->

### Backporters team

<!-- ncu-team-sync.team(nodejs/backporters) -->

- [@addaleax](https://github.com/addaleax) - Anna Henningsen
- [@BethGriggs](https://github.com/BethGriggs) - Bethany Nicolle Griggs
- [@codebytere](https://github.com/codebytere) - Shelley Vohr
- [@gibfahn](https://github.com/gibfahn) - Gibson Fahnestock
- [@jasnell](https://github.com/jasnell) - James M Snell
- [@mhdawson](https://github.com/mhdawson) - Michael Dawson
- [@MylesBorins](https://github.com/MylesBorins) - Myles Borins
- [@sam-github](https://github.com/sam-github) - Sam Roberts

<!-- ncu-team-sync end -->

### Releasers team

<!-- ncu-team-sync.team(nodejs/releasers) -->

- [@BethGriggs](https://github.com/BethGriggs) - Bethany Nicolle Griggs
- [@BridgeAR](https://github.com/BridgeAR) - Ruben Bridgewater
- [@cjihrig](https://github.com/cjihrig) - Colin Ihrig
- [@codebytere](https://github.com/codebytere) - Shelley Vohr
- [@evanlucas](https://github.com/evanlucas) - Evan Lucas
- [@Fishrock123](https://github.com/Fishrock123) - Jeremiah Senkpiel
- [@gibfahn](https://github.com/gibfahn) - Gibson Fahnestock
- [@jasnell](https://github.com/jasnell) - James M Snell
- [@MylesBorins](https://github.com/MylesBorins) - Myles Borins
- [@rvagg](https://github.com/rvagg) - Rod Vagg
- [@targos](https://github.com/targos) - Michaël Zasso

<!-- ncu-team-sync end -->

### CITGM team

<!-- ncu-team-sync.team(nodejs/citgm) -->

- [@al-k21](https://github.com/al-k21) - Oleksandr Kushchak
- [@bengl](https://github.com/bengl) - Bryan English
- [@BridgeAR](https://github.com/BridgeAR) - Ruben Bridgewater
- [@bzoz](https://github.com/bzoz) - Bartosz Sosnowski
- [@gdams](https://github.com/gdams) - George Adams
- [@gibfahn](https://github.com/gibfahn) - Gibson Fahnestock
- [@MylesBorins](https://github.com/MylesBorins) - Myles Borins
- [@richardlau](https://github.com/richardlau) - Richard Lau
- [@targos](https://github.com/targos) - Michaël Zasso

<!-- ncu-team-sync end -->

### Emeritus

#### LTS Team members
- [@jasnell](https://github.com/jasnell) - James M Snell

#### CITGM team
- [@jasnell](https://github.com/jasnell) - James M Snell
