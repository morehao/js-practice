// 'use strict'
let a = 2;
(function IIEF (def) {
  def(this);
})(function def( global) {
  let a = 3;
  console.log(a);
  console.log(global.a);
})