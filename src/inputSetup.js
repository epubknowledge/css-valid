module.exports = i => {
  let cssArray = []
  return Array.isArray(i) === true ? (cssArray = i) : (cssArray = i.split(','))
}
