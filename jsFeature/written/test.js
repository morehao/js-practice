'use strict'
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.time('basicWay')
const sortFun = function (dataA, dataB) {
  return (dataA < dataB) ? -1 : 1
}
console.timeEnd('basicWay')
console.log('basicWay:', arr.sort(sortFun))
