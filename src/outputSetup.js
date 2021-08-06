fs = require('fs')
path = require('path')

const { homedir } = require('os')
const absPath = require('./absPath')

module.exports = obj => {
  let outObj = {}
  if (obj.output === false && obj.cli === false) return obj
  if (obj.output === false) {
    outObj.dir = obj.input.dir
  } else {
    const ot = obj.output.trim().toLowerCase()
    if (ot !== false && ot !== 'desktop' && ot.match(/(docs|documents)/) === null)
      outObj.dir = absPath(obj.output)
    if (ot === 'desktop') outObj.dir = path.join(homedir(), 'Desktop')
    if (ot.match(/(docs|documents)/)) outObj.dir = path.join(homedir(), 'Documents')
  }
  outObj.valid = fs.existsSync(outObj.dir) && fs.lstatSync(outObj.dir).isDirectory()
  obj.output = outObj
  return obj
}
