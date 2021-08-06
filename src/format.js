const errors = require('./errors')
const warnings = require('./warnings')

module.exports = async (data, cli, file) => {
  let valObj = { file }
  const errorCount = data.match(new RegExp(/(?<=<m:errorcount>)[0-9]+(?=<\/m:errorcount>)/m))[0]
  const warningCount = data.match(
    new RegExp(/(?<=<m:warningcount>)[0-9]+(?=<\/m:warningcount>)/m),
  )[0]
  const cleanData = data
    .replace(/^\s+(?=<)/gim, ``)
    .replace(/(?<=\/>)\s+$/gim, ``)
    .replace(/\n^\s+(?=env:encodingStyle)/gim, ` `)
    .replace(/\n^\s+(?=xmlns:m)/gim, ` `)
    .replace(/^\s+$\n/gim, '')
    .replace(/(?<=>)\s+$/gim, '')
    .replace(/(?<=>)\n^\s+/gim, '')
    .replace(/<m:([A-Za-z0-9]+)>\s+<\/m:\1>/gim, `<m:$1><\/m:$1>`)
    .replace(/<m:([A-Za-z0-9]+)>(.*?)$\n<\/m:\1>/gim, `<m:$1>$2<\/m:$1>`)

  if (cli === true) {
    valObj.errors = Number(errorCount)
    valObj.warnings = Number(warningCount)
    valObj.data = valObj.errors !== 0 || valObj.warnings !== 0 ? data : null
    valObj.data = valObj.errors !== 0 || valObj.warnings !== 0 ? cleanData : null
  } else {
    valObj.errors = errorCount === '0' ? 0 : errors(cleanData)
    valObj.warnings = warningCount === '0' ? 0 : warnings(cleanData)
  }
  return valObj
}
