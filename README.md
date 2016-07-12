# Node.js Long Term Support Working Group

# Active Release Line Schedule

<table width="100%">
<tr>
  <th width="10%">Release Line</th>
  <th width="30%">Current Status</th>
  <th width="20%">LTS Start</th>
  <th width="20%">Maintenance Start</th>
  <th width="20%">LTS End</th>
</tr>


<tr>
  <th>v0.10</th>
  <td>Maintenance</td>
  <td align="center">-</td>
  <td align="center">2015-10-01</td>
  <td align="center">2016-10-01</td>
</tr>

<tr>
  <th>v0.12</th>
  <td>Maintenance</td>
  <td align="center">-</td>
  <td align="center">2016-04-01</td>
  <td align="center">2016-12-31</td>
</tr>

<tr>
  <th>v4</th>
  <td>Active&nbsp;LTS&nbsp;("Argon")</td>
  <td align="center">2015-10-01</td>
  <td align="center">2017-04-01</td>
  <td align="center">2018-04-01</td>
</tr>

<tr>
  <th>v5</th>
  <td>Current&nbsp;(non-LTS)</td>
  <td colspan="3" align="center">N/A</td>
</tr>

<tr>
  <th>v6</th>
  <td>Current&nbsp;(pending&nbsp;LTS)</td>
  <td align="center">2016-10-01</td>
  <td align="center">2018-04-01</td>
  <td align="center">2019-04-01</td>
</tr>

<tr>
  <th>v7</th>
  <td>Unreleased</td>
  <td colspan="3" align="center">N/A</td>
</tr>

</table>

<p><img src="schedule.png" alt="LTS Schedule"/></p>

# Node.js Release and LTS Plan

## Summary

The new Node.js Release and LTS plan took effect in 2015 with the release of Node.js v4.
While it also takes into account older versions of Node.js, it is easiest to understand when looking forward from v4:

<p><img src="schedule_summary.gif" alt="LTS Schedule Summary"/></p>

## Versioning

Node.js primarily uses [Semantic Versioning](http://semver.org/) ("semver") to identify releases.
This versioning scheme uses three numbers, separated by a period (".").
The first of these numbers is the _Major_ version number (we generally refer to this as "semver-major").
Semver dictates that all incremental releases sharing the same _Major_ number shall be backward compatible, with no intentionally breaking changes introduced throughout this series of releases.
If you are unfamiliar with Semantic Versioning, please review the documentation available at http://semver.org as Node.js, and the majority of its [package ecosystem](https://npmjs.org), make heavy use of this scheme to identify the types of changes introduced in each release.

## Major releases

New semver-major release lines of Node.js are cut from the `master` development branch every six months.
New even-numbered release lines (e.g. v6, v8, v10, etc) are cut in April.
New odd-numbered release lines (e.g. v5, v7, v9) are cut in October.
These 6-monthly release lines are initially referred to as "**Current**" and receive most non-breaking changes that occur on the `master` development branch of Node.js, hence their semver-minor version numbers can increase rapidly during this period.

## Current ⇒ LTS

In October of each year, the even-numbered "Current" release line is transitioned on to the Long Term Support (LTS) plan and begin to be referred to as "**LTS**".
At the same time, a new odd-numbered "Current" release line is created.

## Support timeframes

Every release line covered by LTS will be actively maintained for an initial period of 18 months from the date it enters LTS coverage; this is "**Active LTS**".
Following those 18 months of active support, the release line will transition into "**Maintenance**" mode for 12 additional months.

Given this schedule, there will be no more than two "Active LTS" release lines at any given time, overlapping for a maximum period of six months.
Users are encouraged to use this overlap to plan a migration path between LTS release lines.

Release lines not covered by LTS (i.e. odd-numbered release lines) receive an additional 2 months of "Maintenance"-style support following their 6 months as "Current" releases.

## Acceptable changes for release lines

All release lines covering a single semver-major version number, be it labelled "Current", "Active LTS" or "Maintenance" will:

* _Not_ receive commits labelled "[***semver-major***](https://github.com/nodejs/node/pulls?utf8=%E2%9C%93&q=is%3Apr%20label%3Asemver-major%20)" except in the special case of critical security fixes (see below).
  That is, the external API of any release line shall not be intentionally changed in a non-backward-compatible way.
* Receive commits labelled "[***semver-minor***](https://github.com/nodejs/node/pulls?utf8=%E2%9C%93&q=is%3Apr%20label%3Asemver-minor%20)".
  However, it is expected that release lines that are covered by LTS shall receive a minimal number of these changes in order to maximise stability.
  Additionally, semver-minor changes will be delayed and grouped as much as is practical in LTS release lines in order to ease the upgrade path for users of that line.
  Any semver-minor commits proposed for inclusion in an LTS release line will require:
  - sign-off from at least one active member of the LTS Working Group;
  - no objection from any active member of the LTS Working Group
* Receive semver-patch commits, i.e. those not labelled either semver-major or semver-minor as appropriate.
  Any semver-patch commits proposed for inclusion in an LTS release line will require:
  - sign-off from at least one active member of the LTS Working Group;
  - no objection from any active member of the LTS Working Group

### Acceptable upgrades to the V8 dependency

The Node.js JavaScript runtime, [V8](https://developers.google.com/v8/), is part of the Node.js C++ API. Therefore, changes to the C++ API of V8 have a flow-on effect to the Node.js package ecosystem and must be treated in a similar way to changes to the core of Node.js itself. In general, major versions of V8 (e.g. 5.1, 5.2, 5.3, etc. — note that these are not semver) are considered _breaking changes_ for Node.js users due to the regular changes in the C++ [API](https://en.wikipedia.org/wiki/Application_programming_interface) (application programming interface) and [ABI](https://en.wikipedia.org/wiki/Application_binary_interface) (application binary interface) even if the JavaScript API remains stable.

All new semver-major increments start out with a fresh API and ABI from their `x.0.0` release. While the C++ API may change over time according to semver rules (e.g. introducing new features that are backward-compatible—"semver-minor"), the **ABI must strictly remain stable over the life of that major version**, even as it moves through the various stages ("Current", "Active LTS" and "Maintenance").

Release lines in "Active LTS" and "Maintenance" will be pinned to a single major version of V8 during their lifetime in order to maximise stability. Bug fixes and improvements may be introduced, either by downstreaming, backporting, or by original authorship, according to the same policy for Node.js changes for LTS release lines.

Release lines in "Current" _may_ receive updates to their V8 dependency. This will occur ***only if*** it can be done in a way that is not semver-major and does not break the stable ABI of the current major version. This may be achieved by either receiving an ABI-stable update from upstream or by applying floating patches to the dependency to ensure ABI-stability. Implementation details are left up to the Node.js V8 team.

Upgrades to V8 in a "Current" release line should not occur within two months of that release line moving in to "Active LTS". i.e. upgrades to V8 should not occur from August through to the transition of "Current" into LTS in October.

### Changes acceptable for "Active LTS"

Release lines currently in "Active LTS" will only receive changes that satisfy one or more of the following categories:

1. Bug fixes
2. Security updates
3. Non-semver-major npm updates
4. Relevant documentation updates
5. Certain performance improvements where the risk of breaking existing applications is minimal
6. Changes that introduce large amount of code churn where the risk of breaking existing applications is deemed to be very low and where the change in question may significantly ease the ability to backport future changes due to the reduction in "diff noise"
7. Updates to other dependencies that introduce bug fixes, where members of the LTS Working Group deem such updates very low-risk to stability and security

### Changes acceptable for "Maintenance"

Release lines currently in "Active LTS" will only receive changes that satisfy one or more of the following categories:

1. ***Critical*** bug fixes
2. ***Critical*** security fixes
3. Relevant documentation updates
4. Updates to dependencies that introduce critical bug fixes, where members of the LTS Working Group deem such updates very low-risk to stability and security

### Semver-major changes in LTS

It is possible that ***critical*** security and bug fixes may be labelled "semver-major".
Such situations are expected to be rare.

Where it is necessary to introduce such "semver-major" changes into a release line covered by LTS.
The changes will result in an increment of the semver-minor version number only.
Release notes for releases where these changes have been introduced will clearly state the reason for this situation.

## LTS Codenames

All LTS release lines will be assigned a "codename" drawn from the names of elements on the Periodic Table of Elements.
Prior to the transition of a release line to "Active LTS", the LTS Working Group will select a handful of candidate names and submit that short-list to the Node.js Collaborators for a deciding vote.

## LTS Branch Strategy

Every LTS release line has two branches in the N[ode.js GitHub repository](https://github.com/nodejs/node): a _release_ branch and a _staging_ branch.
The release branch is used to cut new releases.
Only members of the release team should land commits into the release branch.
The staging branch is used to land cherry-picked or backported commits from the master (or other) branch that need to be included in a future release of that line.

**Example**: Node.js v4 has a `v4.x` branch and a `v4.x-staging` branch.
When commits land in the `master` branch that must be cherry-picked for a future Node.js v4 release, those commits must be landed into the `v4.x-staging` branch.
When commits are backported (i.e. require non-trivial fixing beyond what Git is able to automatically handle during a cherry-pick) for a future Node.js v4 release, those must come in the form of pull requests opened against the `v4.x-staging` branch.
**Commits are only landed in the `v4.x` branch when a new `v4.x` release is being prepared.**

## C++ Add-on Abstraction Layer

The officially supported Node.js abstraction layer, [NAN](https://github.com/nodejs/nan), will make all effort to support all currently supported release lines, including "Current", "Active LTS" and "Maintenance".
At various times, this will mean supporting at least 4 overlapping supported versions of Node.js: one "Current", two "Active LTS" and one "Maintenance".

## LTS Working Group Members

* Ben Noordhuis [@bnoordhuis](https://github.com/bnoordhuis)
* Jeremiah Senkpiel [@Fishrock123](https://github.com/Fishrock123)
* Wyatt Preul [@geek](https://github.com/geek)
* James M Snell [@jasnell](https://github.com/jasnell)
* João Reis [@joaocgreis](https://github.com/joaocgreis)
* Michael Dawson [@mhdawson](https://github.com/mhdawson)
* Julien Gilli [@misterdjules](https://github.com/misterdjules)
* Ali Ijaz Sheikh [@ofrobots](https://github.com/ofrobots)
* Forrest L Norvell [@othiym23](https://github.com/othiym23)
* Rod Vagg [@rvagg](https://github.com/rvagg)
* Shigeki Ohtsu [@shigeki](https://github.com/shigeki)
* Steven R. Loomis [@srl295](https://github.com/srl295)
* Myles Borins [@TheAlphaNerd](https://github.com/TheAlphaNerd)
* Trevor Norris [@trevnorris](https://github.com/trevnorris)
* Yunong Xiao [@yunong](https://github.com/yunong)
* Kat Marchán [@zkat](https://github.com/zkat)

## License

Copyright &copy; Node.js Foundation, SPDX-License-Identifier: MIT
