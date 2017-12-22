const GlitchApi = require('../lib/glitch.js')


describe('#importFromGithub using async/await', () => {
  beforeEach(() => {
    GlitchApi.prototype.importFromGithub = jest.fn()
    GlitchApi.prototype.importFromGithub.mockImplementation(() => {
      return { status: 200 }
    })
  })

  test('200', async () => {
    const glitchApi = new GlitchApi(1234)
    const response = await glitchApi.importFromGithub('1234', 'me/success')
    expect(response.status).toBe(200)
  })
}) // #importFromGitHub
