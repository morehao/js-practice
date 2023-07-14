'use strict'
// 排序算法
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.time('basicWay')
const sortFun = function (dataA, dataB) {
  return (dataA < dataB) ? -1 : 1
}
console.timeEnd('basicWay')
console.log('basicWay:', arr.sort(sortFun))

function swap (arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
}

// 冒泡排序
console.time('bubbleSort')
function bubbleSort (arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}
console.timeEnd('bubbleSort')
console.log(bubbleSort(arr))

// 选择排序
console.time('selectSort')
function selectSort (arr) {
  let len = arr.length
  let minIndex
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }
  return arr
}
console.timeEnd('selectSort')
console.log(selectSort(arr))

// 插入排序
function insertSort (arr) {
  let len = arr.length
  let temp, preIndex
  for (let i = 1; i < len; i++) {
    temp = arr[i]
    preIndex = i - 1
    while (preIndex >= 0 && arr[preIndex] > temp) {
      swap(arr, preIndex, preIndex + 1)
      preIndex--
    }
  }
  return arr
}
console.log(insertSort(arr))

// 归并排序
function mergeSort(arr) {
  const len = arr.length
  if (len < 2) { return arr }
  const mid = Math.floor(len / 2)
  console.log('mid:', mid)
  const left = arr.splice(0, mid)
  const right = arr
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = []
  while (left.length > 0 && right.length > 0) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift())
  }
  return result.concat(left, right)
}

console.log(mergeSort(arr))

