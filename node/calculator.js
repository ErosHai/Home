function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiplication(num1, num2) {
  return num1 * num2
}

function division(num1, num2) {
  return num1 / num2
}

//  NodeJS 模块化
module.exports = {
  add,
  subtract,
  multiplication,
  division
}