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
After approval the nominee will be assigned a mentor from the releasers team
to help walk them through the process to learn how to prepare a release.

The nominee will then be expected to prepare one release on any active release
line, which can be tagged, signed and promoted by any other existing member of
the releasers team. After this release the nominee will be considered a full
member of the releasers team. The first release promoted by a new releasers
team member must have a mentor from the current releasers team available to
support during the process.

At any point during this process any member of the Release WG can raise an
objection to the TSC.

After the nominee's first prepared release has been promoted the new releaser must:

* Be added to the GitHub [releasers team](https://github.com/orgs/nodejs/teams/releasers) in the Node.js org (grants ci-release access)
* Be added to the GitHub [security-release team](https://github.com/orgs/nodejs/teams/security-release) in the Node.js and nodejs-private orgs
* Have a single, high quality SSH key added to the "dist" user on the primary www server (see below for guidelines regarding SSH key quality)
* Have a GPG key added to the nodejs/node [README.md](https://github.com/nodejs/node/#release-team)
* Open a PR in [nodejs/docker-node](https://github.com/nodejs/docker-node/) to add gpg key to [node.keys](https://github.com/nodejs/docker-node/blob/master/keys/node.keys)

New releasers should wait at least 2 weeks after adding a GPG key to the
nodejs/node README credentials before signing a release.

**Actual or suspected compromise of either private SSH or GPG keys must be
reported to the TSC immediately so remedial action can be taken.**

For releasing on LTS release lines, releasers must:

* Be added as members of the GitHub [LTS team](https://github.com/orgs/nodejs/teams/lts)
* Fully release at least one Current Node.js release; for practice, and to help promote the new GPG key to the user ecosystem prior to it being required to verify an LTS release

### SSH key guidance

SSH keys should have complexity roughly similar to RSA at 4096 bits to be
considered secure in modern environments.

An RSA key with 4096 bits can be generated with the following command:

```
ssh-keygen -t rsa -b 4096 -o -a 100 -N ''
```

By default, the resulting private key will be placed in `~/.ssh/id_rsa` and
public key in `~/.ssh/id_rsa.pub`. You can write the key to a Node namespace with
the `-f` flag:

```
ssh-keygen -t rsa -b 4096 -o -a 100 -N '' -f ~/.ssh/node_id_rsa
```

Ed25519 is an elliptic curve DSA algorithm that offers similar complexity to
RSA at 4096 bits but is significantly smaller in file size. It is not supported
by very old versions of OpenSSH but that is not a concern for Node.js. An
Ed25519 SSH key can be generated with the following command:

```
ssh-keygen -t ed25519 -a 100 -N ''
```

By default, the resulting private key will be placed in `~/.ssh/id_ed25519` and
public key in `~/.ssh/id_ed25519.pub`.

The public key can be shared with an existing member of the releasers team to be
placed on the www server for access to the "dist" user. The private key should
be kept very secure and not shared with anyone. Any actual or suspected
compromise of the private key should be reported immediately and the key should
be entirely removed from use.

## Offboarding releasers

*Note*: This section is specifically concerning removing members from the [@nodejs/releasers](https://github.com/orgs/nodejs/teams/releasers) team, not removing members from the overall Release WG.

Releasers have access to critical infrastructure in the project - this elevated access must be restricted to active releasers. Members of the releasers team should be offboarded when they no longer intend to prepare releases. As a guideline, offboarding should be considered if a releaser has not prepared a release in the past 12 months.

The following steps should be taken as part of the offboarding process:
* Be removed from the GitHub [releasers team](https://github.com/orgs/nodejs/teams/releasers) in the Node.js organizations.
* Be removed from the GitHub [security-release team](https://github.com/orgs/nodejs/teams/security-release) in the Node.js and nodejs-private organizations.
* Ensure their SSH key is removed from the `dist` user on the primary www server.
* Move their GPG key in nodejs/node [README.md](https://github.com/nodejs/node/#release-keys) to the 'Other keys used to sign some previous releases' section.
* Open a PR in [nodejs/docker-node](https://github.com/nodejs/docker-node/) to remove their GPG key from [node.keys](https://github.com/nodejs/docker-node/blob/master/keys/node.keys).
* Ensure they are moved to 'Emeritus - Releasers team' in the nodejs/release [README](https://github.com/nodejs/Release/blob/master/README.md).

Releasers are not automatically removed from the wider Release WG.
