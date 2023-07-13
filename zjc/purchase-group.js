'use strict'
let obj = {
  group: '100',
  bu: ''
}
console.log('group:', obj.group)
if (obj.group !== '200' || obj.group !== '300') {
  console.log('1')
} else if (obj.group === '100') {
  console.log('2')
} else {
  console.log('3')
}
