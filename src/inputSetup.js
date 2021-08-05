path = require('path')

const absPath = require('./absPath')

module.exports = i => {
  let obj = {}
  let fileArray = []
  const split = i.split(',')
  obj.dir = path.dirname(absPath(split[0]))
  if (split.length > 1) {
    split.map(file => fileArray.push(`${obj.dir}/${file}`))
  } else {
    fileArray = [`${obj.dir}/${split[0]}`]
  }
  obj.files = fileArray
  return obj
}
