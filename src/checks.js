const chalk = require('chalk')
const exists = require('./exists')
const isDir = require('./isDir')

module.exports = obj => {
  if (obj.output.valid !== true && obj.cli !== false)
    isDir(obj.output.dir) === true ? (obj.output.valid = true) : new Error()
  delete obj.output.valid

  obj.input.files.map(file => {
    if (exists(`${obj.input.dir}/${file}`) === false) {
      console.log(chalk.red('Error:'), chalk.white(`File doesn't exist in directory`))
      process.exit(1)
    }
  })

  return obj
}
