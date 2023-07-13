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

console.log(buildMonthRoot(2017));

const yearRoot = Array.from(new Array(yearInterval).keys()).map(item => {
  const yearStr = currentYear - item;
  return {
    title: yearStr,
    key: yearStr,
    children: buildMonthRoot(yearStr)
  }
});
console.log(yearRoot);