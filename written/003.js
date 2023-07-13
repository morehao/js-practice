'use strict'
// 数组去重

const arr = [1, 1, '1', 3, null, 2, 0]

// indexOf去重
function unique (arr) {
  let res = []
  for (let item of arr) {
    if (res.indexOf(item) === -1) {
      res.push(item)
    }
  }
  return res.sort()
}
console.log(unique(arr))
