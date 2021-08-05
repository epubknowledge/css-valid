const path = require('path')
const chalk = require('chalk')

module.exports = p => {
  try {
    return path.isAbsolute(p) ? p : path.join(process.cwd(), p)
  } catch {
    console.log(chalk.red('Error:'), chalk.white(`Absolute path error`))
    process.exit(1)
  }
}
