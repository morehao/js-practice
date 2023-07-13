'use strict'
// ES6数组去重
const arr = [1, 2, 4, 1, '1']
function unique (arr) {
  return Array.from(new Set(arr))
}
console.log(unique(arr))

// or
function unique1 (arr) {
  return [...new Set(arr)]
}
console.log(unique1(arr))
