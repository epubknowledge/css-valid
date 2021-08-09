const fs = require('fs-extra')
const chalk = require('chalk')

module.exports = obj => {
  obj.input.files.map(item => {
    const passed = item.errors === 0 && item.warnings === 0 ? true : false
    const filename = passed === true ? chalk.green(item.file) : chalk.red(item.file)
    const erCount = item.errors === 0 ? item.errors : chalk.red(item.errors)
    const waCount = item.warnings === 0 ? item.warnings : chalk.red(item.warnings)
    console.log(
      chalk.white('File:'),
      filename,
      chalk.white('Errors:'),
      erCount,
      chalk.white('Warnings:'),
      waCount,
      `\n`,
    )
    if (passed !== true) fs.outputFileSync(`${obj.output.dir}/${item.file}.xml`, item.data)
  })
  console.log(chalk.green('Completed'))
}
