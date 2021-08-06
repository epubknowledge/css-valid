path = require('path')
const { exec } = require('child_process')

const format = require('./format')

const cv = path.join(process.cwd(), 'src', 'css-jar', 'css-validator.jar')

module.exports = async obj => {
  const cssPromises = await obj.input.files.map(file => {
    return new Promise(async (res, rej) => {
      exec(
        `java -jar ${cv} --output=soap12 file:${obj.input.dir}/${file}`,
        async (error, stdout) => {
          if (error !== null) {
            console.log(chalk.red('Error:'), chalk.white(`Validator ran into error`))
            rej(process.exit(1))
          }
          res(await format(stdout, obj.cli, file))
        },
      )
    })
  })
  // const cssFiles = await Promise.all(cssPromises)
  // console.log(cssFiles)
  obj.input.files = await Promise.all(cssPromises)

  return obj
}
