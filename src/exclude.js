module.exports = obj => {
  if (obj.exclusion === false) {
    delete obj.exclusion
    return obj
  }
  obj.exclusion = obj.exclusion.split(',')
  obj.input.files = obj.input.files.filter(item => !obj.exclusion.includes(item))

  return obj
}
