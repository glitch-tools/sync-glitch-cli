[build badge]: https://travis-ci.org/sotayamashita/glitch-deploy-cli.svg?branch=master
[build url]:   https://travis-ci.org/sotayamashita/glitch-deploy-cli

# glitch-deploy-cli [![build status][build badge]]][build url]

[![Greenkeeper badge](https://badges.greenkeeper.io/sotayamashita/glitch-deploy-cli.svg)](https://greenkeeper.io/)

> Deploy a GitHub repository to glitch.com

It uses an API which is used in Glitch application and may be changed without any notice because it is not public. Please keep this in the back of your head. I am looking forward to official API. :+1:

## Install

```
npm install glitch-deploy-cli --save-dev
```

## Usage

You have to set the following environment variables:

- `GLITCH_PROJECT_ID` _(the Glitch project id)_
- `GLITCH_TOKEN` _(the Glitch token)_
- `GH_REPO` _(the GitHub repo. e.g `sotayamashita/glitch-deploy-cli`)_

### with Travis CI

```
deploy:
  glitch-deploy
```

- [Travis CI - The Build Lifecycle](https://docs.travis-ci.com/user/customizing-the-build/#The-Build-Lifecycle)

## License

MIT © Sam Yamashita
