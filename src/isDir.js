fs = require('fs')
path = require('path')
const chalk = require('chalk')

module.exports = dir => {
  try {
    const absolute = path.isAbsolute(dir) ? dir : path.join(process.cwd(), dir)
    return fs.lstatSync(absolute).isDirectory() === true ? absolute : false
  } catch {
    console.log(chalk.red('Error:'), chalk.white(`Not a valid directory`))
    process.exit(1)
  }
}
