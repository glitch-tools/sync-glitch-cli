[npm badge]: https://badge.fury.io/js/sync-glitch-cli.svg
[npm url]:   https://badge.fury.io/js/sync-glitch-cli

[build badge]: https://github.com/glitch-tools/sync-glitch-cli/workflows/E2E/badge.svg
[build url]:   https://github.com/glitch-tools/sync-glitch-cli/actions

[codecov badge]: https://codecov.io/gh/glitch-tools/sync-glitch-cli/branch/master/graph/badge.svg
[codecov url]:   https://codecov.io/gh/glitch-tools/sync-glitch-cli

[dependabot badge]: https://api.dependabot.com/badges/status?host=github&repo=glitch-tools/sync-glitch-cli
[dependabot url]:   https://dependabot.com

[license management badge]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Fglitch-tools%2Fsync-glitch-cli.svg?type=shield
[license management url]:   https://app.fossa.com/projects/git%2Bgithub.com%2Fglitch-tools%2Fsync-glitch-cli?ref=badge_shield

<p align="center">
  <img src="https://user-images.githubusercontent.com/1587053/34863913-2c2a214c-f7b5-11e7-950f-efca77278393.png" width="300"/>
<p/>
<br>

# sync-glitch-cli [![npm][npm badge]][npm url] [![build status][build badge]][build url] [![codecov][codecov badge]][codecov url] [![Dependabot Status][dependabot badge]][dependabot url] [![licence management status][license management badge]][license management url]

> Sync changes in your GitHub repository to glitch.com

It pushes changes from a GitHub repository to glitch.com. It does **NOT** pull changes from glitch.com to GitHub.

**Heads-up!**  It uses undocumented API so it can be changed without any notice. However, I am making efforts to know whether it works or not with [test-sync-glitch-cli](https://github.com/sotayamashita/test-sync-glitch-cli). It executes test every day with TravisCI. It helps my recognise as soon as possible if it could be wrong. I am looking forward to official API. :unicorn:

## Install

```bash
npm install sync-glitch-cli --save-dev
```

## Usage

### How to get required environment variables

1. Open your project on Glitch
1. Open devtool and click the Network tab
1. Select Project name > Advanced Options > Import from GitHub
1. You can find a request URL which starts from `https://api.glitch.com/projects/githubImport ~`:

   ![network](https://raw.githubusercontent.com/glitch-tools/sync-glitch-cli/master/public/assets/capture.png)

1. It has three params. These params are what you need.

### How to set environment variables

You have to set the following environment variables:

- `GLITCH_PROJECT_ID` _(the Glitch project id.)_
- `GLITCH_TOKEN` _(the Glitch authorization)_
- `GH_REPO` _(the GitHub repo. e.g `sotayamashita/sync-glitch-cli`)_

```console
GLITCH_PROJECT_ID='' GLITCH_TOKEN='' GH_REPO='' ./node_modules/.bin/sync-glitch
```

Enable debug logs:

```console
GLITCH_PROJECT_ID='' GLITCH_TOKEN='' GH_REPO='' DEBUG=sync-glitch* ./node_modules/.bin/sync-glitch
```

## License

sync-glitch-cli © [Sam Yamashita](https://twitter.com/sota0805). Released under the [Apache 2.0](LICENSE)<br/>
Authored and maintained by [Sam Yamashita](https://twitter.com/sota0805) with help from [contributors](https://github.com/glitch-tools/sync-glitch-cli/contributors).

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fglitch-tools%2Fsync-glitch-cli.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fglitch-tools%2Fsync-glitch-cli?ref=badge_large)
