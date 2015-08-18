# Node.js Long-term Support Working Group

_See [issues](https://github.com/nodejs/LTS/issues) for discussion on kicking off this working group._

# LTS Plan

The Current LTS Plan is:

1. The next LTS release will be cut from the Converged Repo (nodejs/node) once
   the convergence of the joyent/node and nodejs/io.js streams has been
   completed. The current target is to move to the fully converged stream by
   the end of August, 2015, with the `v4.x` stable branch transitioning to LTS around the first week of October, 2015.
2. After that, new LTS releases will occur once every 12 months, at the same
   time each year.
3. Every LTS release will be actively maintained for a period of 18 months
   from the date the LTS release is announced. After the 18 months have passed,
   the release will transition into Maintenance mode until the current LTS
   release moves into Maintenance 12 months later. (That is 18 months of
   active LTS + 12 months Maintenance only).
4. There will be no more than two active LTS releases at any given time,
   overlapping for a maximum period of six months.
5. The existing joyent/node v0.10 will continue in Maintenance mode for
   approximately one year after the initial LTS release from the converged
   repo. The existing joyent/node v0.12 will continue in LTS for a period
   of 6 months after the initial LTS release from the converged repo,
   after which it will transition into Maintenance for 9 months**.
6. There will be no LTS releases cut from the nodejs/io.js stream.
7. Once a release enters LTS, no new features may be added to that release.
   Changes are limited to bug fixes, security updates, possible npm updates,
   documentation updates, and certain performance improvements that can be
   demonstrated to not break existing applications, etc. Semver-minor changes
   are only permitted if required for bug fixes. Semver-major changes are only
   permitted if required for critical security and bug fixes.
8. Once a release moves into Maintenance mode, only ***critical*** bugs,
   ***critical*** security fixes, and documentation updates will be permitted.
9. The current release plan calls for stable branches to be cut off `master`
   at approximately six month intervals. Each of these stable branches
   represents exactly one *semver-major* version. There will be two of these
   cut each year, an odd numbered stable, and an even numbered stable. Even
   numbered stable branches will transition into LTS status, odd numbered
   stable branches will not.
10. Note that while it is possible that critical security and bug fixes may
    lead to *semver-major* changes landing within an LTS stream, such
    situations will be rare and will land as *semver-minor* bumps.
11. All LTS releases will be assigned a "codename" drawn from the names of
    elements on the Periodic Table of Elements. For each upcoming LTS
    release, the LTS Working Group will select a handful of candidate names
    and submit those for a collaborator vote.

** LTS for the version of OpenSSL used by v0.12 (v1.0.1) is scheduled
   to expire on 2016-12-31. While the typical maintenance LTS cycle
   for a node release is 12 months, the LTS for OpenSSL v1.0.1 would
   expire 3 months before the LTS for v0.12 would expire. The LTS WG
   has therefore decided that the best approach is to shorten the
   maintenance period for v0.12 and align it's end date with that of
   OpenSSL v1.0.1's end date.

## Node abstraction layer

It should be stated that the abstraction layer (currently `NAN`) should
support all *current* LTS releases. Given that Active LTS will overlap
for a period of 6 months, this means that the abstraction layer will, at
any given point in time, fully support a maximum of 2 LTS releases.

## Example

Following the new release plan, at roughly six month intervals, a new stable
branch is cut off `master`. Each stable branch represents a semver-major
version. The first new stable branch cut off the converged stream will be
`v4.0.0`. Assuming there are additional semver-minor and semver-patch bumps
in that stable branch, the version could increase to some arbitrary number
(e.g. `v4.4.1`). At around early October 2015, the v4.x stable branch will
transition into the first LTS release and the `v5.0.0` stable branch will be
created. While `v5.0.0` will be a stable branch, it will *not* transition into
LTS.

Roughly six months later (in April 2016), a new stable branch will be created
for `v6.0.0`. Approximately six months later, at around the same date the
`v4.x` LTS was cut the previous year, `v6.x` will transition in to LTS and the
cycle repeats.

Let's assume (hypothetically) that the first LTS Release occurs on
October 1st, 2015.

1. nodejs/node v4.4.1 becomes the current LTS Release
2. joyent/node v0.10 continues in Maintainance only mode until
   October 1st, 2016
3. joyent/node v0.12 continues as LTS until April 1st, 2016, after
   which it moves into Maintenance only mode until ~~April 1st, 2017~~
   December 31st, 2016.
4. On or around October 1st, 2016, `v6.x.x` transitions into
   the second LTS release.
5. LTS for v4.4.1 continues until April 1st, 2017, after which it
   moves to Maintenance mode until around April 1st, 2018.
6. On or around October 1st, 2017, `v8.x.x` transitions into
   the third LTS release.

Note that one implication of this schedule is that the LTS would include a V8
version that is at least six months old and that will need to be supported for
up to 30 months beyond the LTS release.

<table>
<tr>
  <th>Release</th>
  <th>LTS Start</th>
  <th>Maintenance Start</th>
  <th>LTS End</th>
</tr>
<tr>
  <td>v0.10</td>
  <td>(current)</td>
  <td>2015-10-01</td>
  <td>2016-10-01</td>
</tr>
<tr>
  <td>v0.12</td>
  <td>(current)</td>
  <td>2016-04-01</td>
  <td>2016-12-31</td>
</tr>
<tr>
  <td>v4.4.1</td>
  <td>2015-10-01</td>
  <td>2017-04-01</td>
  <td>2018-04-01</td>
</tr>
<tr>
  <td>v6.x.x</td>
  <td>2016-10-01</td>
  <td>2018-04-01</td>
  <td>2019-04-01</td>
</tr>
</table>

<p><img src="https://camo.githubusercontent.com/675f052419c56a583c19644d4da30cc0ff4e02bb/68747470733a2f2f636c6475702e636f6d2f6c4d48746245334e72782d3330303078333030302e706e67" alt="Strawman LTS Schedule"/></p>

(note: the diagram above shows v0.12 maintenance expiring in April 2017. That
date has been changed to December 31st, 2016.)
