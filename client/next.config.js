const isGithubActions = process.env.GITHUB_ACTIONS || false

const cwd = process.cwd().replace(/.*?\//, '')
let assetPrefix = `/${cwd}/out/`
let basePath = `/${cwd}/out`

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  console.log(repo);

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