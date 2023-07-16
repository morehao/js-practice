var a = 10;
console.log(this.a); // undefined
console.log(global.a); // undefined
this.a = 10
console.log(module.exports.a); // 10

b = 10;
console.log(global.b); // 10
console.log(this.b); // undefined