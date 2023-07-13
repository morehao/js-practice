'use strict'
const arr = [
  {
    id: 1,
    a: 1
  },
  {
    id: 4,
    a: 2
  },
  {
    id: 3,
    a: 3
  },
  {
    id: 3,
    a: 3
  }
]
const createIndex = (items)=>{
  const maxLength = 5
  let max = 0
  let len = items.length
  if (items) {
    for (let [index, item] of items.entries()) {
      let currentIndex = index
      max = Math.max(max, item.id)
      const joinRes = Array(5).join(0) + (index + 10)
      console.log('max:', joinRes.slice(-5))
    }
  } else {
    console.logI(111)
  }
  return items
}
createIndex(arr)

  
