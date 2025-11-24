# Node.js Release Working Group

## Release schedule

| Release  | Status              | Codename     |Initial Release | Active LTS Start | Maintenance Start | End-of-life               |
| :--:     | :---:               | :---:        | :---:          | :---:            | :---:             | :---:                     |
| [20.x][] | **Maintenance LTS** | [Iron][]     | 2023-04-18     | 2023-10-24       | 2024-10-22        | 2026-04-30                |
| [22.x][] | **Maintenance LTS** | [Jod][]      | 2024-04-24     | 2024-10-29       | 2025-10-21        | 2027-04-30                |
| [24.x][] | **Active LTS**      | [Krypton][]  | 2025-05-06     | 2025-10-28       | 2026-10-20        | 2028-04-30                |
| [25.x][] | **Current**         |              | 2025-10-15     | -                | 2026-04-01        | 2026-06-01                |

Dates are subject to change.

<p><img src="schedule.svg" alt="LTS Schedule"/></p>

The Release schedule is available also as a [JSON][] file.

### Release Phases

There are three phases that a Node.js release can be in: 'Current', 'Active
Long Term Support (LTS)', and 'Maintenance'. Odd-numbered release lines are not
promoted to LTS - they will not go through the 'Active LTS' or 'Maintenance'
phases.

 * Current - Should incorporate most of the non-major (non-breaking)
 changes that land on `nodejs/node` main branch.
 * Active LTS - New features, bug fixes, and updates that have been audited by
 the Release team and have been determined to be appropriate and stable for the
 release line.
 * Maintenance - Critical bug fixes and security updates. New features may be
 added at the discretion of the Release team - typically only in cases where
 the new feature supports migration to later release lines.

Changes required for critical security and bug fixes may lead to *semver-major*
changes landing within a release stream, such situations will be rare and will
land as *semver-minor*. Although, those changes should have a revert option included.

The term 'supported release lines' will be used to refer to all release lines
that are not End-of-Life.

### End-of-Life Releases

|  Release |      Status     |  Codename | Initial Release | Active LTS Start | Maintenance LTS Start | End-of-life |
|:--------:|:---------------:|:---------:|:---------------:|:----------------:|:---------------------:|:-----------:|
|  v0.10.x | **End-of-Life** |     -     |    2013-03-11   |         -        |       2015-10-01      |  2016-10-31 |
|  v0.12.x | **End-of-Life** |     -     |    2015-02-06   |         -        |       2016-04-01      |  2016-12-31 |
|  [4.x][] | **End-of-Life** | [Argon][] |    2015-09-08   |    2015-10-01    |       2017-04-01      |  2018-04-30 |
|  [5.x][] | **End-of-Life** |           |    2015-10-29   |         -        |                       |  2016-06-30 |
|  [6.x][] | **End-of-Life** | [Boron][] |    2016-04-26   |    2016-10-18    |       2018-04-30      |  2019-04-30 |
|  [7.x][] | **End-of-Life** |           |    2016-10-25   |         -        |                       |  2017-06-30 |
|  [8.x][] | **End-of-Life** | [Carbon][]|    2017-05-30   |    2017-10-31    |       2019-01-01      |  2019-12-31 |
|  [9.x][] | **End-of-Life** |           |    2017-10-01   |         -        |                       |  2018-06-30 |
| [10.x][] | **End-of-Life** |[Dubnium][]|    2018-04-24   |    2018-10-30    |       2020-05-19      |  2021-04-30 |
| [11.x][] | **End-of-Life** |           |    2018-10-23   |         -        |                       |  2019-06-01 |
| [12.x][] | **End-of-Life** | [Erbium][]|    2019-04-23   |    2019-10-21    |       2020-11-30      |  2022-04-30 |
| [13.x][] | **End-of-Life** |           |    2019-10-22   |         -        |                       |  2020-06-01 |
| [14.x][] | **End-of-Life** |[Fermium][]|    2020-04-21   |    2020-10-27    |       2021-10-19      |  2023-04-30 |
| [15.x][] | **End-of-Life** |           |    2020-10-20   |         -        |                       |  2021-06-01 |
| [16.x][] | **End-of-Life** |[Gallium][]|    2021-04-20   |    2021-10-26    |       2022-10-18      | [2023-09-11][nodejs16eol] |
| [17.x][] | **End-of-Life** |           |    2021-10-19   |         -        |                       |  2022-06-01 |
| [18.x][] | **End-of-Life** |[Hydrogen][]|   2022-04-19   |    2022-10-25    |       2023-10-18      |  2025-04-30 |
| [19.x][] | **End-of-Life** |           |    2022-10-18   |         -        |                       |  2023-06-01 |
| [21.x][] | **End-of-Life** |           |    2023-10-17   |         -        |       2024-04-01      |  2024-06-01 |
| [23.x][] | **End-of-Life** |           |    2024-10-15   |         -        |       2025-04-01      |  2025-06-01 |

## Mandate

The Release working group's purpose is:

* Management/execution of the release and support process for all releases.

Its responsibilities are:

* Define the release process.
* Define the content of releases.
* Generate and create releases.
* Test Releases.
* Manage the LTS and Current branches including backporting changes to
  these branches.
* Define the policy for what gets backported to release streams.

The Release working group is structured into teams and membership in
the working group does not automatically result in membership in these
teams. These teams are:

* Releasers team
* Backporters team
* CITGM team

The `releasers` team is entrusted with the secrets and CI access to be able
build and sign releases. **Additions to the releasers team must be approved
by the TSC following the process outlined in GOVERNANCE.md.**

The Release team manages the process/content of LTS releases
and the required backporting for these releases. Additions to the Release
team needs sign off from the rest of the Release team.

The Canary in the Gold Mine (CITGM) team maintains CITGM as one of
the key sanity checks for releases. This team maintains the CITGM
repository and works to keep CITGM builds running and passing regularly.
This also includes maintaining the CI jobs in collaboration with the Build
Working Group.

## Release Plan

New *semver-major* releases of Node.js are branched from `main` every six
months. New even-numbered versions are released in April and odd-numbered
versions in October.

In coordination with a new *odd-numbered* major release, the previous
*even-numbered* major version will transition to Long Term Support. The
transition to Long Term Support will happen in a *semver-minor* release and
should happen after the new major version is released.

Every even (LTS) major version will be actively maintained for 12 months from
the date it enters LTS coverage. Following those 12 months of active support,
the major version will transition into "maintenance" mode for 18 months. Prior
to Node.js 12, the active period was 18 months and the maintenance period 12
months. See [Releases Phases](#release-phases) for details of which changes
are expected to land during each release phase.

The exact date that a release will be moved to LTS, moved between LTS modes,
or deprecated will be chosen no later than the first day of the month it is to
change. If the release team plans to change the release date, it will be done
with no less than 14 days notice.

All LTS releases will be assigned a codename. A list of expected upcoming
codenames is available in [CODENAMES.md](./CODENAMES.md).

### LTS Staging Branches

Every LTS major version has two branches in the GitHub repository: a release
branch and a staging branch. The release branch is used to cut new releases.
Only members of the @nodejs/releasers team should land commits onto release branches.
The staging branch is used to land cherry-picked or backported commits from
main that need to be included in a future release. Only members of
@nodejs/backporters should land commits onto staging branches.

For example, for Node.js v4, there is a `v4.x` branch and a `v4.x-staging`
branch. When commits land in main that must be cherry-picked for a future
Node.js v4 release, those must be landed into the `v4.x-staging` branch. When
commits are backported for a future Node.js v4 release, those must come in the
form of pull requests opened against the `v4.x-staging` branch. **Commits are
only landed in the `v4.x` branch when a new `v4.x` release is being prepared.**

Generally, changes are expected to live in a *Current* release for at least 2
weeks before being backported. It is possible for a commit to land earlier at
the discretion of the Release working group.

[Argon]: https://nodejs.org/download/release/latest-argon/
[Boron]: https://nodejs.org/download/release/latest-boron/
[Carbon]: https://nodejs.org/download/release/latest-carbon/
[Dubnium]: https://nodejs.org/download/release/latest-dubnium/
[Erbium]: https://nodejs.org/download/release/latest-erbium/
[Fermium]: https://nodejs.org/download/release/latest-fermium/
[Gallium]: https://nodejs.org/download/release/latest-gallium/
[Hydrogen]: https://nodejs.org/download/release/latest-hydrogen/
[Iron]: https://nodejs.org/download/release/latest-iron/
[Jod]: https://nodejs.org/download/release/latest-jod/
[Krypton]: https://nodejs.org/download/release/latest-krypton/
[JSON]: schedule.json
[nodejs16eol]: https://nodejs.org/en/blog/announcements/nodejs16-eol/
[4.x]: https://nodejs.org/download/release/latest-v4.x/
[5.x]: https://nodejs.org/download/release/latest-v5.x/
[6.x]: https://nodejs.org/download/release/latest-v6.x/
[7.x]: https://nodejs.org/download/release/latest-v7.x/
[8.x]: https://nodejs.org/download/release/latest-v8.x/
[9.x]: https://nodejs.org/download/release/latest-v9.x/
[10.x]: https://nodejs.org/download/release/latest-v10.x/
[11.x]: https://nodejs.org/download/release/latest-v11.x/
[12.x]: https://nodejs.org/download/release/latest-v12.x/
[13.x]: https://nodejs.org/download/release/latest-v13.x/
[14.x]: https://nodejs.org/download/release/latest-v14.x/
[15.x]: https://nodejs.org/download/release/latest-v15.x/
[16.x]: https://nodejs.org/download/release/latest-v16.x/
[17.x]: https://nodejs.org/download/release/latest-v17.x/
[18.x]: https://nodejs.org/download/release/latest-v18.x/
[19.x]: https://nodejs.org/download/release/latest-v19.x/
[20.x]: https://nodejs.org/download/release/latest-v20.x/
[21.x]: https://nodejs.org/download/release/latest-v21.x/
[22.x]: https://nodejs.org/download/release/latest-v22.x/
[23.x]: https://nodejs.org/download/release/latest-v23.x/
[24.x]: https://nodejs.org/download/release/latest-v24.x/
[25.x]: https://nodejs.org/download/release/latest-v25.x/

The working group members are the union of the Releasers, Backporters
and CITGM team members listed below.

### Backporters team

<!-- ncu-team-sync.team(nodejs/backporters) -->

* [@aduh95](https://github.com/aduh95) - Antoine du Hamel
* [@BethGriggs](https://github.com/BethGriggs) - Beth Griggs
* [@codebytere](https://github.com/codebytere) - Shelley Vohr
* [@guybedford](https://github.com/guybedford) - Guy Bedford
* [@RafaelGSS](https://github.com/RafaelGSS) - Rafael Gonzaga
* [@richardlau](https://github.com/richardlau) - Richard Lau

<!-- ncu-team-sync end -->

## Releasers team

<!-- ncu-team-sync.team(nodejs/releasers) -->

* [@aduh95](https://github.com/aduh95) - Antoine du Hamel
* [@juanarbol](https://github.com/juanarbol) - Juan José
* [@marco-ippolito](https://github.com/marco-ippolito) - Marco Ippolito
* [@RafaelGSS](https://github.com/RafaelGSS) - Rafael Gonzaga
* [@richardlau](https://github.com/richardlau) - Richard Lau
* [@ruyadorno](https://github.com/ruyadorno) - Ruy Adorno
* [@targos](https://github.com/targos) - Michaël Zasso
* [@UlisesGascon](https://github.com/UlisesGascon) - Ulises Gascón

<!-- ncu-team-sync end -->

## CITGM team

* https://github.com/nodejs/citgm#citgm-team

## Emeritus

### LTS team
- [@addaleax](https://github.com/addaleax) - Anna Henningsen
- [@BethGriggs](https://github.com/BethGriggs) - Bethany Griggs
- [@bnoordhuis](https://github.com/bnoordhuis) - Ben Noordhuis
- [@danielleadams](https://github.com/danielleadams) - Danielle Adams
- [@ErisDS](https://github.com/ErisDS) - Hannah Wolfe
- [@Fishrock123](https://github.com/Fishrock123) - Jeremiah Senkpiel
- [@geek](https://github.com/geek) - Wyatt Preul
- [@gibfahn](https://github.com/gibfahn) - Gibson Fahnestock
- [@jasnell](https://github.com/jasnell) - James M Snell
- [@mhdawson](https://github.com/mhdawson) - Michael Dawson
- [@MylesBorins](https://github.com/MylesBorins) - Myles Borins
- [@othiym23](https://github.com/othiym23) - Forrest L Norvell
- [@rvagg](https://github.com/rvagg) - Rod Vagg
- [@sam-github](https://github.com/sam-github) - Sam Roberts
- [@shigeki](https://github.com/shigeki) - Shigeki Ohtsu
- [@srl295](https://github.com/srl295) - Steven R. Loomis
- [@trevnorris](https://github.com/trevnorris) - Trevor Norris
- [@yunong](https://github.com/yunong) - Yunong Xiao

### Releasers team
- [@bengl](https://github.com/bengl) - Bryan English
- [@BethGriggs](https://github.com/BethGriggs) - Bethany Griggs
- [@BridgeAR](https://github.com/BridgeAR) - Ruben Bridgewater
- [@cjihrig](https://github.com/cjihrig) - Colin Ihrig
- [@codebytere](https://github.com/codebytere) - Shelley Vohr
- [@danielleadams](https://github.com/danielleadams) - Danielle Adams
- [@evanlucas](https://github.com/evanlucas) - Evan Lucas
- [@Fishrock123](https://github.com/Fishrock123) - Jeremiah Senkpiel
- [@gibfahn](https://github.com/gibfahn) - Gibson Fahnestock
- [@jasnell](https://github.com/jasnell) - James M Snell
- [@MylesBorins](https://github.com/MylesBorins) - Myles Borins
- [@rvagg](https://github.com/rvagg) - Rod Vagg
