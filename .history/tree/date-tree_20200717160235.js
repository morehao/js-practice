'use strict';

const [ currentYear, yearInterval ] = [ 2020, 2 ];

const monthRoot = Array.from(new Array(12).keys()).map(item => {

})

const buildMonthRoot = (year) => {
  return Array.from(new Array(12).keys()).map(item => {
    return {
      title: `${item + 1}月`,
      key: `${year}-${item + 1}`
    }
  })
}

const yearRoot = Array.from(new Array(yearInterval).keys()).map(item => {
  return {
    title: currentYear - item,
    key: currentYear - item,
    children: 
  }
});
console.log(yearRoot);