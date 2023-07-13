'use strict'
// 函数表达式
/* 
  由于函数被包含在一堆括号内部，因此成为了一个表达式，通过在末尾加另一对括号就可以立即执行这个函数。
  第一个括号将函数标称表达式，第二个括号执行了这个函数，所以也称为立即执行函数表达式。
*/
let a = 2;
(function foo() {
  let a = 3
  console.log('a1:', a)
})()
console.log('a2:', a)

// 匿名函数表达式
setTimeout(function() {
  console.log('I wait ten seconds')
}, 10000)

// 行内函数表达式，使函数有了名字，即具名函数表达式
setTimeout(function timeoutHandler() {
  console.log('I hava a name!')
}, 1000)

