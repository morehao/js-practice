// var obj = {
//   name: 'aaaaaa'
// };

// function show(obj) {

//   obj={name:'bbbbbb'}
//   // obj.name = 'bbbbb'

// }
// show(obj);
// console.log(obj.name)

// var obj = {name: 'aaa'}
// var newObj = obj
// newObj = {name: 'bbb'}
// console.log('obj:', obj)
// console.log('newObj:', newObj)

// var a = [1, 2, 3]
// var b = a
// a = [1, 2, 3, 4]
// console.log(a)
// console.log(b)

let obj = {
  a: 1,
  b: 2,
  c: 3
}
let params = {a, b} = obj
console.log(params)