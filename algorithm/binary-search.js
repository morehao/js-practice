'use strict';

const binarySearch = (arr, target) => {
  let [ low, high ] = [ 0, arr.length ];
  if (arr[low] > target) return -1;
  let mid = Math.floor((low + high + 1) / 2);
  while (low < high) {
    if (arr[mid] < target) {
      low = mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      break;
    }
    mid = Math.floor((low + high + 1) / 2);
  }
  return mid;
};

const arrList = [ 1, 2, 4, 5, 9, 10 ];

console.log(binarySearch(arrList, 9));
