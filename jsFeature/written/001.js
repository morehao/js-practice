'use strict'
// 实现add(2, 3)
function add (x, y) {
  return x + y
}
console.log(add(2, 3))

// 考虑延伸性
function addNew () {
  let res = 0
  for (let item of arguments) {
    res += item
  }
  return res
}
console.log(addNew(1, 2, 3))
