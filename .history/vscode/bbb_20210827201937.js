let name = 'xiaoming';

function sum(num1, num2) {
  return num1 + num2
}

console.log(name);

export {
  name,
  sum
}

export class person {
  run(){
    console.log('run');
  }
}