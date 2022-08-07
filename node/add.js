const calculator = require('./calculator.js')
console.log(calculator)

let addResult = calculator.add(1, 2)
console.log(`1 + 2 = ${addResult}`);


let subResult = calculator.subtract(4, 2)
console.log(`4 - 2 = ${subResult}`);