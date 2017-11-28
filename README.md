[build badge]: https://travis-ci.org/sotayamashita/glitch-deploy-cli.svg?branch=master
[build url]:   https://travis-ci.org/sotayamashita/glitch-deploy-cli
[greenkeeper badge]: https://badges.greenkeeper.io/sotayamashita/glitch-deploy-cli.svg
[greenkeeper url]:   https://greenkeeper.io/

# glitch-deploy-cli [![build status][build badge]][build url] [![greenkeeper status][greenkeeper badge]][greenkeeper url]


> Deploy a GitHub repository to glitch.com

<p>
  <a href="https://www.patreon.com/bePatron?u=6995574">
    <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" height="40px" />
  </a>
</p>

It uses an API which is used in Glitch application and may be changed without any notice because it is not public. Please keep this in the back of your head. I am looking forward to official API. :+1:

## Install

```
npm install glitch-deploy-cli --save-dev
```

## Usage

You have to set the following environment variables:

- `GLITCH_PROJECT_ID` ..._the Glitch project id. You can get from `https://api.glitch.com/projects/<Your Project Domain >`_
- `GLITCH_TOKEN` ... _the Glitch token_
- `GH_REPO` ... _the GitHub repo. e.g `sotayamashita/glitch-deploy-cli`_

### with Travis CI

```
# .travis.yml
deploy:
  glitch-deploy
```

- [Travis CI - The Build Lifecycle](https://docs.travis-ci.com/user/customizing-the-build/#The-Build-Lifecycle)
- [Travis CI - Environment Variables](https://docs.travis-ci.com/user/environment-variables/)

## related

## License

MIT © Sam Yamashita
