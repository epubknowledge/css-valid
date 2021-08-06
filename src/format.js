const errors = require('./errors')
const warnings = require('./warnings')

module.exports = async (data, cli, file) => {
  let valObj = { file }
  const errorCount = data.match(new RegExp(/(?<=<m:errorcount>)[0-9]+(?=<\/m:errorcount>)/m))[0]

  const warningCount = data.match(
    new RegExp(/(?<=<m:warningcount>)[0-9]+(?=<\/m:warningcount>)/m),
  )[0]

  if (cli === true) {
    valObj.errors = Number(errorCount)
    valObj.warnings = Number(warningCount)
    valObj.data = valObj.errors !== 0 || valObj.warnings !== 0 ? data : null
  } else {
    valObj.errors = errorCount === '0' ? 0 : errors(data)
    valObj.warnings = warningCount === '0' ? 0 : warnings(data)
  }
  return valObj
}
