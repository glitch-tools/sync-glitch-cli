const envalid = require('envalid')

module.exports = envalid.cleanEnv(process.env, {
  GH_REPO: envalid.str(),
  GLITCH_TOKEN: envalid.str(),
  GLITCH_PROJECT_ID: envalid.str()
})
