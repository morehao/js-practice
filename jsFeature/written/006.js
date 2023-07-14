'use strict'
// 数组对象去重
const arr = [
  {name: 'a', age: 1},
  {name: 'b', age: 1},
  {name: 'a', age: 2},
  {name: 'a', age: 1}
]
// 方法一：利用对象的键名不能重复
function unique (arr) {
  let obj = {}
  let result = []
  for (let item of arr) {
    obj[item.name] = item
  }
  for (let item in obj) {
    result.push(obj[item])
  }
  return result
}
console.log(unique(arr))
