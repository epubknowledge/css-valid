fs = require('fs')
path = require('path')

module.exports = obj =>
  fs.readdirSync(obj.input.dir).filter(file => path.extname(file).toLowerCase() === '.css')
