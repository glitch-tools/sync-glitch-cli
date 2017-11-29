#!/usr/bin/env node
const deployGlitch = require('./index')
const envalid = require('envalid')
const debug = require('debug')('glitch-deploy-cli')

// Quote from gr2m/glitch-deploy
// https://github.com/gr2m/glitch-deploy/blob/master/bin/glitch-deploy.js#L5-L8
if (process.env.CI) {
  debug('Running on CI and checking for environment varibales.')
  envalid.cleanEnv(process.env, {
    GH_REPO: envalid.str(),
    GLITCH_TOKEN: envalid.str(),
    GLITCH_PROJECT_ID: envalid.str()
  })
}

;(async () => {
  await deployGlitch(process.env.GLITCH_TOKEN, process.env.GLITCH_PROJECT_ID, process.env.GH_REPO)
})()
