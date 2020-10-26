const r2 = require("r2");
const queryString = require("query-string");

class Glitch {
  constructor(token) {
    this.endpoint = "https://api.glitch.com";
    this.token = token;
  }

  async importFromGithub(projectId, repo, path = "/") {
    const query = queryString.stringify({
      authorization: this.token,
      projectId: projectId,
      repo: repo,
      path: path // the default value of '/' will import everything from the root dir
    });
    return r2.post(`${this.endpoint}/project/githubImport?${query}`).response;
  }
}

module.exports = Glitch;
