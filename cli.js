#!/usr/bin/env node
const GlitchAPI = require("./lib/glitch.js");
const envalid = require("envalid");
const chalk = require("chalk");
const debug = require("debug")("sync-glitch");

// Quote from gr2m/glitch-deploy
// https://github.com/gr2m/glitch-deploy/blob/master/bin/glitch-deploy.js#L5-L8
if (process.env.CI) {
  debug("Running on CI and checking for environment variables.");
  envalid.cleanEnv(process.env, {
    GH_REPO: envalid.str(),
    GLITCH_TOKEN: envalid.str(),
    GLITCH_PROJECT_ID: envalid.str(),
    //note: we skip the GH_SUBDIR variable because it will default to '/' (root)
  });
}

(async () => {
  const glitchClient = new GlitchAPI(process.env.GLITCH_TOKEN);
  const response = await glitchClient.importFromGithub(
    process.env.GLITCH_PROJECT_ID,
    process.env.GH_REPO,
    // the subdirectory is an optional parameter
    process.env.GH_SUBDIR || undefined
  );

  if (response.status !== 200) {
    const output = [
      chalk.red("error "),
      "Fail to sync changes in your GitHub repository to glitch.com",
      chalk.yellow("\nExiting with error code 1"),
    ].join("");
    console.error(output);
    process.exit(1);
  } else {
    const output = [
      chalk.green("success "),
      "Synced changes in your GitHub repository to glitch.com",
    ].join("");
    console.log(output);
  }
})();
