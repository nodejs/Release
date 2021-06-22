# Release Guidance

Guidance related to the management of Node.js releases and the release schedule.

*Note: The process of creating a release is documented in the [releases.md](https://github.com/nodejs/node/blob/master/doc/guides/releases.md) file in the Node.js core repository.*

# Updating the Release Schedule

When making amendments to the release schedule the following files in this repository should be updated:
 * `schedule.json` - The JSON file should be updated to reflect the added or amended dates/entries.
 * `README.md` - The [Release Schedule Table](https://github.com/nodejs/Release#release-schedule) should be updated.
 * `schedule.svg` - The timeline graphic should be regenerated. See [Updating the schedule.svg](#updating-the-schedulesvg)

# Updating the `schedule.svg`

The following commands can be used to regenerate the `schedule.svg`:

```sh
$ npx lts --start yyyy-mm-dd --end yyyy-mm-dd -d "$PWD/schedule.json" -g "$PWD/schedule.svg"
$ npx svgo "$PWD/schedule.svg"
```

The start and end dates should be selected so that, at least, all currently supported versions and the next (upcoming) major version of Node.js are shown. The timeline graphic should be periodically moved forward.
