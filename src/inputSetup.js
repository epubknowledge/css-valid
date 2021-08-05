path = require('path')

const absPath = require('./absPath')

module.exports = i => {
  let obj = {}
  let cssArray = []
  if (Array.isArray(i) === true) {
    cssArray = i
  } else {
    cssArray = i.split(',')
  }
  obj.dir = path.dirname(absPath(cssArray[0]))
  obj.files = cssArray
  return obj
}
