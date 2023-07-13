'use strict';

const [ currentYear, yearInterval ] = [ 2020, 2 ];

const yearRoot = Array.from(new Array(yearInterval).keys()).map(item => {
  return {
    title: currentYear - item,
    key: currentYear - item,
    children: []
  }
});
console.log(yearRoot);