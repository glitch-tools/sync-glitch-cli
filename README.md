[npm badge]: https://badge.fury.io/js/sync-glitch-cli.svg
[npm url]:   https://badge.fury.io/js/sync-glitch-cli
[build badge]: https://travis-ci.org/glitch-tools/sync-glitch-cli.svg?branch=master
[build url]:   https://travis-ci.org/glitch-tools/sync-glitch-cli
[codecov badge]: https://codecov.io/gh/glitch-tools/sync-glitch-cli/branch/master/graph/badge.svg
[codecov url]:   https://codecov.io/gh/glitch-tools/sync-glitch-cli
[dependabot badge]: https://api.dependabot.com/badges/status?host=github&repo=glitch-tools/sync-glitch-cli
[dependabot url]:   https://dependabot.com

<p align="center">
  <img src="https://user-images.githubusercontent.com/1587053/34863913-2c2a214c-f7b5-11e7-950f-efca77278393.png" width="300"/>
<p/>
<br>

# sync-glitch-cli [![npm][npm badge]][npm url] [![build status][build badge]][build url] [![codecov][codecov badge]][codecov url] [![Dependabot Status][dependabot badge]][dependabot url]

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

## Troubleshooting

- [ ] Ensure your repository is **NOT** empty
