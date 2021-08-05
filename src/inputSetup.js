path = require('path')

const absPath = require('./absPath')

module.exports = i => {
  let obj = {}
  let fileArray = []
  const split = i.split(',')
  obj.dir = path.dirname(absPath(split[0]))
  if (split.length > 1) {
    split.map(file => fileArray.push(file.trim()))
  } else {
    fileArray = [split[0].trim()]
  }
  obj.files = fileArray
  return obj
}
