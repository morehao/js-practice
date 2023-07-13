'use strict'
// 实现add(2)(3)
function add (x) {
  let res = 0
  res += x
  return function (y) {
    res += y
    return res
  }
}
console.log(add(2)(3))

// 考虑延伸性
function newAdd (x) {
  let res = 0
  res += x
  return function template (y) {
    if (arguments.length === 0) {
      return res
    } else {
      res += y
      return template
    }
  }
}
console.log(newAdd(2)(3)())
