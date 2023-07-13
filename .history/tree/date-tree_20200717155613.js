'use strict';

const [ currentYear, yearInterval ] = [ 2020, 2 ];

const yearRoot = Array.from(new Array(yearInterval).keys()).map(item => {
  return {
    title: currentYear - item - 1,
    key: currentYear - item - 1,
    children: []
  }
});
console.log(yearRoot);