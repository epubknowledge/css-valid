fs = require('fs')
path = require('path')
const chalk = require('chalk')

const absPath = require('./absPath')

module.exports = dir => {
  try {
    const abs = absPath(dir)
    return fs.lstatSync(abs).isDirectory() === true ? abs : false
  } catch {
    console.log(chalk.red('Error:'), chalk.white(`Not a valid directory`))
    process.exit(1)
  }
}
