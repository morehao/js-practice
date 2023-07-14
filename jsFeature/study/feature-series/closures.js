// 'use strict'
// function makeAdder (x) {
//   return function (y) {
//     return x + y
//   }
// }

// var add5 = makeAdder(5)
// var add10 = makeAdder(10)

// console.log(add5) // [Function]
// console.log(add5(2)) // 7
// console.log(add10(2)) // 12

var data = []

for (let i = 0; i < 3; i++) {
  const a = i
  console.log('a:', a)
  data[i] = function () {
    console.log(i)
  }
}
data[0]()
data[1]()
data[2]()
