# glitch-deploy-cli

> Deploy a GitHub repository to glitch.com

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
