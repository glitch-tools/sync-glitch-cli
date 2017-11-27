const r2 = require('r2')

async function deployGlitch (token, projectId, repo) {
  const queryObj = { token: token, projectId: projectId, repo: repo }
  try {
    const response = await r2.post(`https://api.glitch.com/project/githubImport/${buildQuery(queryObj)}`).response
    if (response.statue !== 200) {
      throw new Error(`response status is ${response.status}`)
    }
  } catch (err) {
    console.log(err.message)
  }
}

function buildQuery (data) {
  let queryString = []
  for (const d in data) {
    queryString[queryString.length] = `${encodeURIComponent(d)}=${encodeURIComponent(data[d])}`
  }
  return `?${queryString.join('&')}`
}

module.exports = deployGlitch
