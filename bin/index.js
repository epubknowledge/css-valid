const chalk = require('chalk')

const checks = require('../src/checks')
const exclude = require('../src/exclude')
const objExport = require('../src/export')
const inputSetup = require('../src/inputSetup')
const isDir = require('../src/isDir')
const outputSetup = require('../src/outputSetup')
const readDir = require('../src/readDir')
const validate = require('../src/validate')

module.exports = async (i = false, o = false, f = false, e = false, cli = false) => {
  // Test for Directory Input
  if (i === false || i === undefined) {
    console.log(chalk.red('Error:'), chalk.white('Invalid directory'))
    return process.exit(1)
  }

  // Object Directory Input
  cssObj = {
    input: {
      dir: isDir(i),
    },
    output: o,
    exclusion: e,
    cli,
  }

  // Read dir if file false || passed CSS file
  cssObj.input.files = f === false ? await readDir(cssObj) : await inputSetup(f)

  // Output Setup
  cssObj = await outputSetup(cssObj)

  // Exclusion Setup
  cssObj = await exclude(cssObj)

  // Check files and directories exist
  cssObj = await checks(cssObj)

  // Validate CSS files
  cssObj = await validate(cssObj)

  // Return or Export Results
  return cssObj.cli === true ? await objExport(cssObj) : cssObj
}
