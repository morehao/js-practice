'use strict'
const showSecond = () => {
  let date = new Date()
  const seconds = date.getSeconds()
  console.log('the seconds is: ' + seconds)
}
// setInterval(showSecond, 1000)
// console.log('test')

// setTimeout()函数以毫秒为单位时间间隔，执行一次代码块
setTimeout(showSecond, 1000)
console.log('test')
