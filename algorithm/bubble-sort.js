'use strict';

const exchange = (arr, i, j) => {
  if (i < 0 || i > arr.length) return;
  if (j < 0 || j > arr.length) return;
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
const bubbleSort = arr => {
  console.time('time:')
  const length = arr.length;
  arr.forEach(()=>{
    for(let j = 0; j < length - 1; j++) {
      // console.log('arr[i]:', arr[i]);
      // console.log('arr[j]:', arr[j]);
      if (arr[j+1] < arr[j]) exchange(arr, j+1, j)
    }
  })
  console.timeEnd('time:')
}

const bubbleSort1 = arr => {
  console.time('time1:');
  const i = arr.length - 1;
  while(i < 0) {
    let position = 0;
    for(let j = 0; j < i; j++) {
      console.log('ada');
      if (arr[j] > arr[j+1]) {
        exchange(arr, j, j+1);
        position = j;
      }
      i = position;
    }
  }
  console.timeEnd('time1:');
}

const bubbleSort2 = arr => {
  console.time('time2:');
  let low = 0
  let high = arr.length - 1;
  let position = 0;
  while(low < high) {
    for(let i = low; i < high; ++i) {
      // console.log('i:', i);
      if (arr[i] > arr[i+1]) exchange(arr, i, i+1);
    }
    --high;
    for(let j = high; j > low; --j) {
      // console.log('j:', j);
      if (arr[j] < arr[j-1]) exchange(arr, j, j-1);
    }
    ++low;
  }
  console.timeEnd('time2:');
}
const dataArr = Array.from(new Array(12000).keys()).reverse();
const dataArr1 = Array.from(new Array(12000).keys()).reverse();
const dataArr2 = Array.from(new Array(12000).keys()).reverse();
bubbleSort(dataArr)
bubbleSort1(dataArr1)
bubbleSort2(dataArr2)
// console.log(dataArr);
// console.log(dataArr1);
// console.log(dataArr2);