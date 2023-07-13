var data = require('./instead.json')
console.log(typeof data)
obj = {
  text: '市场费（HT）',
  sub: {}
}
for (var item in data) {
  var newItem = item.replace(60, 65)
  obj.sub[newItem] = data[item]
}
console.log(obj)
