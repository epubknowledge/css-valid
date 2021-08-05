const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')

module.exports = (i, v, d) => {
  clear()
  console.log(
    chalk.green(
      figlet.textSync(i, {
        horizontalLayout: 'full',
        kerning: 'full',
      }),
    ),
  )
  console.log(chalk.white('Version: '), chalk.cyan(v))
  console.log(chalk.white('Description: '), chalk.cyan(d))
}
