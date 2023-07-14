function Gadget(name, color) {
  this.name = name
  this.color = color
  this.whatAreYou = function () {
    return 'I am a' + this.color + ''
    this.name
  }
}
Gadget.prototype.price = 100
Gadget.prototype.rating = 3
Gadget.prototype.getInfo = function () {
  return 'Rating:' + this.rating + ',price:' + this.price
}
const newtoy = new Gadget('morehao', 'red')
console.log(newtoy.name)
console.log(newtoy.getInfo())