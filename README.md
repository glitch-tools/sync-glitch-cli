[build badge]: https://travis-ci.org/sotayamashita/glitch-deploy-cli.svg?branch=master
[build url]:   https://travis-ci.org/sotayamashita/glitch-deploy-cli
[greenkeeper badge]: https://badges.greenkeeper.io/sotayamashita/glitch-deploy-cli.svg
[greenkeeper url]:   https://greenkeeper.io/

# glitch-deploy-cli [![build status][build badge]][build url] [![greenkeeper status][greenkeeper badge]][greenkeeper url]

<p>
  <a href="https://www.patreon.com/bePatron?u=6995574">
    <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" height="40px" />
  </a>
</p>

> Deploy a GitHub repository to glitch.com

It uses an API which is used in Glitch application and may be changed without any notice because it is not public. I use this script in [sotayamashita/pr-label](https://github.com/sotayamashita/pr-label/) and it is run by every week. It will help me know if it will be broken. Please keep this in the back of your head. I am looking forward to official API. :+1:

## Install

```
npm install glitch-deploy-cli --save-dev
```

## Usage

### How to get required environment variables

1. Open your project on Glitch
1. Open devtool and click the Network tab
1. Select Project name > Advanced Options > Import from GitHub
1. You can find a request URL which starts from `https://api.glitch.com/projects/githubImport ~`:

   ![network](https://user-images.githubusercontent.com/1587053/33523225-a779160e-d844-11e7-9dc2-28e9afed9260.png)

1. It has three params. These params are what you need.

### How to set environment variables

You have to set the following environment variables:

- `GLITCH_PROJECT_ID` _(the Glitch project id.)_
- `GLITCH_TOKEN` _(the Glitch token)_
- `GH_REPO` _(the GitHub repo. e.g `sotayamashita/glitch-deploy-cli`)_

```
GLITCH_PROJECT_ID='' GLITCH_TOKEN='' GH_REPO='' ./node_modules/.bin/glitch-deploy
```

Enable debug logs:

```
GLITCH_PROJECT_ID='' GLITCH_TOKEN='' GH_REPO='' DEBUG=glitch-deploy* ./node_modules/.bin/glitch-deploy
```

### with Travis CI

```yml
# .travis.yml
after_success:
  - glitch-deploy
```

Enable debug logs:

```yml
# .travis.yml
after_success:
  - DEBUG=glitch-deploy* glitch-deploy
```

- [Travis CI - The Build Lifecycle](https://docs.travis-ci.com/user/customizing-the-build/#The-Build-Lifecycle)
- [Travis CI - Environment Variables](https://docs.travis-ci.com/user/environment-variables/)

## License

MIT © Sam Yamashita
