const isGithubActions = process.env.GITHUB_ACTIONS || false

const cwd = process.cwd().replace(/.*?\//, '')
let assetPrefix = '/'
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
    assetPrefix: assetPrefix,
    basePath: basePath,
    env: {
        BASE_PATH: basePath
    },
}