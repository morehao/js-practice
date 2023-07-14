function HashTable () {
  this.name = 'HashTable'
  this.add = function (age) {
    return age + 1
  }
  console.log(this)
}
HashTable()