const GlitchApi = require("../lib/glitch.js");
const nock = require("nock");

const token = "1234";
const projectId = "1234";
const repo = "me/repo";
const path = "folder";

describe("#importFromGithub using async/await", () => {
  beforeEach(() => {
    nock.disableNetConnect();
  });

  test("200", async () => {
    nock("https://api.glitch.com")
      .post("/project/githubImport")
      .query({
        authorization: token,
        projectId: projectId,
        repo: repo,
        path: path
      })
      .reply(200, { status: 200 });

    const glitchApi = new GlitchApi(token);
    const response = await glitchApi.importFromGithub(projectId, repo, path);
    expect(response.status).toBe(200);
  });

  test("no repo subdirectory", async () => {
    nock("https://api.glitch.com")
      .post("/project/githubImport")
      .query({
        authorization: token,
        projectId: projectId,
        repo: repo,
        path: "/" // default path
      })
      .reply(200, { status: 200 });

    const glitchApi = new GlitchApi(token);
    const response = await glitchApi.importFromGithub(projectId, repo);
    expect(response.status).toBe(200);
  });

  afterEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
}); // #importFromGitHub
