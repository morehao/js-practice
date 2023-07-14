'use strict'
const letterArr = ['A', 'B', 'C', 'D']
const answerArr = [{text: 'answer1'}, {text: 'answer2'}, {text: 'answer3'}]
for (let [index, item] of answerArr.entries()) {
  item.order = letterArr[index]
}
console.log(answerArr)
