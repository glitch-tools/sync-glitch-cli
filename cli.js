#!/usr/bin/env node

const deployGlitch = require('./index')
const debug = require('debug')('glitch-deploy')

// Thanks gr2m/glitch-deploy
// https://github.com/gr2m/glitch-deploy/blob/master/bin/glitch-deploy.js#L5-L8
if (process.env.CI) {
  debug('Running on CI, checking for environment varibales')
  require('./lib/env.js')
}

;(async () => {
  const glitchProjectId = process.env.GLITCH_PROJECT_ID
  const glitchToken = process.env.GLITCH_TOKEN
  const ghRepo = process.env.GH_REPO

  await deployGlitch(glitchToken, glitchProjectId, ghRepo)
})()
