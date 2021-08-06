fs = require('fs')

module.exports = filename => (fs.existsSync(filename) === true ? true : false)
