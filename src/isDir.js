fs = require('fs')
path = require('path')

module.exports = dir => {
  const absolute = path.isAbsolute(dir) ? dir : path.join(process.cwd(), dir)
  return fs.lstatSync(absolute).isDirectory() === true ? absolute : false
}
