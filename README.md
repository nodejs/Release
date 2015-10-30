# Node.js Long-term Support Working Group

_See [issues](https://github.com/nodejs/LTS/issues) for discussion on kicking off this working group._

# LTS Plan

The Current LTS Plan is:

1. The next LTS release will be cut from the Converged Repo (nodejs/node) once
   the convergence of the joyent/node and nodejs/io.js streams has been
   completed. The current target is to move to the fully converged stream by
   the end of August, 2015, with the first LTS release cut during the first
   week of October, 2015.
2. After that, new LTS releases will occur once every 12 months, at the same
   time each year (April 1). ([*v4.2 is the exception to this rule*](#a-note-about-v42-lts)
3. Every LTS release will be actively maintained for a period of 18 months
   from the date the LTS release is cut. After the 18 months have passed, the
   release will transition into Maintenance mode until the current LTS
   release moves into Maintenance 12 months later. (That is 18 months of
   active LTS + 12 months Maintenance only).
4. There will be no more than two active LTS releases at any given time,
   overlapping for a maximum period of six months.
5. The existing joyent/node v0.10 will continue in Maintenance mode for
   approximately one year after the initial LTS release from the converged
   repo. The existing joyent/node v0.12 will continue in LTS for a period
   of 6 months after the initial LTS release from the converged repo,
   after which it will transition into Maintenance for 12 months.
6. There will be no LTS releases cut from the nodejs/io.js stream.
7. Once a release enters LTS, no new features may be added to that release.
   Changes are limited to bug fixes, security updates, possible npm updates,
   documentation updates, and certain performance improvements that can be
   demonstrated to not break existing applications, etc. Semver-minor changes
   are only permitted if required for bug fixes. Semver-major changes are only
   permitted if required for critical security and bug fixes.
8. Once a release moves into Maintenance mode, only ***critical*** bugs,
   ***critical*** security fixes, and documentation updates will be permitted.
9. *semver-major* bumps are permitted *between* LTS releases. The LTS release
   will be cut from the last stable release before a *semver-major* bump. The
   implication of this is that the *semver-major* bump should be timed to
   roughly coincide with the regular yearly LTS release schedule.
10. Note that while it is possible that critical security and bug fixes may
    lead to *semver-major* changes landing within an LTS stream, such
    situations will be rare and will land as *semver-minor* bumps.
11. All LTS releases will be assigned a "codename" drawn from the names of
    elements on the Periodic Table of Elements. For each upcoming LTS
    release, the LTS Working Group will select a handful of candidate names
    and submit those for a collaborator vote.

## Node abstraction layer

It should be stated that the abstraction layer (currently `NAN`) should
support all *current* LTS releases. Given that Active LTS will overlap
for a period of 6 months, this means that the abstraction layer will, at
any given point in time, fully support a maximum of 2 LTS releases.

## Example

The specific details may vary depending on the `next` and `master` release plan
that is ultimately adopted. However, the release plan will not impact the
schedule or proceses for managing an LTS release once it has been cut.

For example. Let's suppose that convergence of the source streams is completed.
For the sake of the example, let's assume that the first converged stream
release is v4.0.0 (the next major after the then current io.js release).

Let's suppose that the revised release plan currently being discussed in
https://github.com/nodejs/io.js/issues/1997 is adopted. This would mean
that there are regular, periodic merges from the `next` branch into `master`
that trigger a `semver-major` bump (assuming at least two per year, six months
apart). Let's assume that the current `master` immediately before the `next`
merge is at v4.2.0. When the `semver-major` bump from `next` occurs, v4.2.0
becomes the LTS release. If there are several merges from `next` into `master`
through the year, the LTS release will still only occur once per year, at the
same time each year.

Let's assume (hypothetically) that this first LTS Release occurs on
October 1st, 2015.

1. nodejs/node v4.2.0 becomes the current LTS Release
2. joyent/node v0.10 continues in Maintainance only mode until
   October 1st, 2016
3. joyent/node v0.12 continues as LTS until April 1st, 2016, after
   which it moves into Maintenance only mode until April 1st, 2017.
4. On or around October 1st, 2016, the second LTS Release from the
   converged is cut.
5. LTS for v4.2.0 continues until April 1st, 2017, after which it
   moves to Maintenance mode until around April 1st, 2017.
6. On or around October 1st, 2017, the third LTS Release from the
   converged is cut.

Note that one implication of this schedule is that assuming that `next` merges
into `master` twice per year, the LTS would be cut with a V8 version that is at
least six months old and that will need to be supported for up to 30 months
beyond the LTS release.

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
  <td>2017-04-01</td>
</tr>
<tr>
  <td>v4.2.0</td>
  <td>2015-10-01</td>
  <td>2017-04-01</td>
  <td>2018-04-01</td>
</tr>
<tr>
  <td>v.Next</td>
  <td>2016-10-01</td>
  <td>2018-04-01</td>
  <td>2019-04-01</td>
</tr>
</table>

## A note about v4.2 LTS

While v4.2 was released in October, *this is a one-off event!* There was no LTS release plan in place in April 2015; v4.2 LTS was released in August in order to get v4.x updates into an LTS release as quickly as possible. In the future **LTS releases will be cut in April**.

_(Note: v4.2.0 has been the first official LTS release. [(Blog)](https://nodejs.org/en/blog/release/v4.2.0/))_

<p><img src="schedule.png" alt="LTS Schedule"/></p>
