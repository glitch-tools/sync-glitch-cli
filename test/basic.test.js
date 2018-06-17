const GlitchApi = require("../lib/glitch.js");
const nock = require("nock");

const token = "1234";
const projectId = "1234";
const repo = "me/repo";

describe("#importFromGithub using async/await", () => {
  beforeEach(() => {
    nock("https://api.glitch.com")
      .post("/project/githubImport")
      .query({ authorization: token, projectId: projectId, repo: repo })
      .reply(200, { status: 200 });
  });

  test("200", async () => {
    const glitchApi = new GlitchApi(token);
    const response = await glitchApi.importFromGithub(projectId, repo);
    expect(response.status).toBe(200);
  });
}); // #importFromGitHub
