# Release Working Group

The Node.js Release Working Group (WG) maintains oversight
over the Node.js Release, Long Term Support (LTS) and
Canary in the Gold Mine (CitGM) teams. It manages the release
and long term support schedule and policies for all Node.js releases.

The WG has final authority over Releases including:

* Release process and tools.
* Content for all releases.
* Schedule for all releases.
* Contribution policy for the Release repository.
* Conduct guidelines for the Working group.
* Administration of Long Term Support policy for all releases.

For the current list of WG members, see the project README.md.

## Collaborators

The Release GitHub repository is maintained by the WG (all WG
members are Collaborators for the Release repository) and additional
Collaborators who are added by the WG on an ongoing basis.

Individuals making significant and valuable contributions are made
Collaborators and given commit-access to the Release repository.
These individuals are identified by the WG and their addition
as Collaborators is discussed during the WG meeting.

**Note**: If you make a significant contribution and are not considered for
commit access, log an issue or contact a WG member directly and it will
be brought up in the next WG meeting.

Modifications of the contents of the Release repository are made
on a collaborative basis. Anybody with a GitHub account may propose a
modification via pull request and it will be considered by the project
Collaborators. All pull requests must be reviewed and accepted by a
Collaborator with sufficient expertise who is able to take full responsibility
for the change. In the case of pull requests proposed by an existing
Collaborator, an additional Collaborator is required for sign-off. Consensus
should be sought if additional Collaborators participate and there is
disagreement around a particular modification. See Consensus Seeking
Process below for further detail on the consensus model used for governance.

Collaborators may opt to elevate significant or controversial modifications,
or modifications that have not found consensus to the WG for discussion by
assigning the WG-agenda tag to a pull request or issue. The WG should serve
as the final arbiter where required.

## WG Membership

WG seats are not time-limited. There is no fixed size of the WG.

There is no specific set of requirements or qualifications
for WG membership beyond these rules.

The WG may add additional members to the WG by consensus(defined
as no objections, more than 50% of the members participating in the
discussion, and all those participating in the discussion agreeing).

A WG member may be removed from the WG by voluntary resignation,
or by unanimous consensus of all other WG members. If a member is
removed from the WG then they are also removed from all WG teams
(including the Releasers team).

Changes to WG membership should be posted in the agenda, and may be
suggested as any other agenda item (see "WG Meetings" below).

If an addition or removal is proposed during a meeting, and the full WG
is not in attendance to participate, then the addition or removal is
added to the agenda for the subsequent meeting. This is to ensure
that all members are given the opportunity to participate in all
membership decisions. If a WG member is unable to attend a meeting
where a planned membership decision is being made,
then their consent is assumed.

No more than 1/3 of the voting WG members may be affiliated with the same
employer. If removal or resignation of a WG member, or a change of
employment by a WG member, creates a situation where more than 1/3
of the WG membership shares an employer, then the situation must be
immediately remedied by the resignation or removal of one or more
WG members affiliated with the over-represented employer(s).

## WG Meetings

The WG meets regularly, check the foundation calendar for details.
One of the WG members will volunteer to act as the moderator
for each meeting subject to agreement from the rest of the
members. Each meeting should be published to YouTube.

Items are added to the WG agenda that are considered contentious or are
modifications of governance, contribution policy,
WG membership, or release process.

The intention of the agenda is not to approve or review all patches;
that should happen continuously on GitHub and be handled
by the larger group of Collaborators.

Any community member or contributor can ask that something be
added to the next meeting's agenda by logging a GitHub Issue.
Any Collaborator, WG member or the moderator can add the item
to the agenda by adding the WG-agenda tag to the issue.

Prior to each WG meeting the moderator will share the Agenda with
members of the WG. WG members can add any items they like to the
agenda at the beginning of each meeting.

The WG may invite persons or representatives from certain
projects to participate in a non-voting capacity.

The moderator is responsible for summarizing the discussion of
each agenda item and sends it as a pull request after the meeting.

## Consensus Seeking Process

The WG follows a Consensus Seeking decision-making model.

When an agenda item has appeared to reach a consensus the moderator
will ask "Does anyone object?" as a final call for dissent from the consensus.

If an agenda item cannot reach a consensus a WG member can call for either a
closing vote or a vote to table the issue to the next meeting. The call for
a vote must be seconded by a majority of the WG or else the
discussion will continue. Simple majority wins.

Note that changes to WG membership require unanimous consensus.
See "WG Membership" above.

## Adding new releasers

When considering adding a new releaser an email should be sent to the
[Technical Steering Committee](https://github.com/nodejs/tsc) for approval.
After approval the nominee will be assigned a mentor from the release team
to help walk them through the process to learn how to prepare a release.
The nominee will then be expected to prepare 3 Current releases, which
can be promoted by any other member of the release team. After the 3rd
release the nominee will be considered a full member of the releasers
team. At any point during this process any member of the Release WG
can raise an objection to the TSC.

When being officially added to the Releasers group the following must happen:

* Added to Releasers team in the Node.js org (grants ci-release access)
* SSH keys need to be added to the dist user on the www machine
* GPG keys need to be added to the nodejs/node [README.md](https://github.com/nodejs/node/#release-team)
* Raise an issue in [nodejs/docker-node](https://github.com/nodejs/docker-node/) to note that the gpg keys will need to be updated.

New Releasers need to also be on the LTS team to do LTS releases.
New Releasers should wait at least 2 weeks after adding credentials before signing a release.
