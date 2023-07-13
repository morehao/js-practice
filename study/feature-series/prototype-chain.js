'use strict'

// 创建构造函数Person和实例对象person
function Person () {

}
let person = new Person()
person.name = 'Kevin'
console.log(person.name)

// prototype属性,prototype是函数才会有的属性
// 此代码片段中，构造函数:Person,实例原型：Person.prototype,实例对象：person1和person2
Person.prototype.sex = 'male'
let person1 = new Person()
let person2 = new Person()
console.log(person1.sex)
console.log(person2.sex)
// 获取对象的原型
console.log(Object.getPrototypeOf(person1) === Person.prototype)

// _proto_属性,该属性指向该对象的原型
let person3 = new Person()
console.log(person3.__proto__ === Person.prototype)

// constructor属性
console.log(Person === Person.prototype.constructor)
// 当获取 person.constructor 时，其实 person 中并没有 constructor 属性,
// 当不能读取到constructor 属性时，会从 person 的原型也就是 Person.prototype 中读取，正好原型中有该属性
console.log(person.constructor === Person)

// 实例与原型
// 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止
let person4 = new Person()
person4.sex = 'female'
console.log(person4.sex)
delete person4.sex
// 从person4照片那个找不到sex属性，就去person4的原型person.__proto__（也就是Person.prototype）中去找
console.log(person4.sex)

// 原型的原型
let obj = new Object() // 更优：let obj = {}
obj.name = 'Kevin'
console.log(obj.name)
console.log(Person.prototype.__proto__ === Object.prototype)

// 原型链
// null表示没有对象，即该处不应该有值，所以 Object.prototype.__proto__ 的值为 null 跟 Object.prototype 没有原型，其实表达了一个意思。
// 所以查找属性的时候查到 Object.prototype 就可以停止查找了。
console.log(Object.prototype.__proto__ === null)
// 由相互关联的原型组成的链状结构就是原型链
