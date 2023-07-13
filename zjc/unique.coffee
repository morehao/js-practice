allItems = [
  {code: 1, num: 2, sum: 1, rate: 'J1'}
  {code: 1, num: 2, sum: 2, rate: 'J2'}
  {code: 1, num: 2, sum: 3, rate: 'J1'}
  {code: 2, num: 1, sum: 1, rate: 'J1'}
  {code: 2, num: 2, sum: 3, rate: 'J1'}
]

unique = (arr)=>
  obj = {}
  newItems = []
  for item in arr
    obj["#{item.code}#{item.rate}"] = {code: item.code, num: 0, sum: 0, rate: item.rate}
  console.log obj
  for item in arr
    obj["#{item.code}#{item.rate}"].num += item.num
    obj["#{item.code}#{item.rate}"].sum += item.sum
  console.log obj
  for item of obj
    newItems.push(obj[item])
  newItems
console.log unique allItems
