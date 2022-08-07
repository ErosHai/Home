let name = 'xiaoming';

function sum(num1, num2) {
  return num1 + num2
}


export {
  name,
  sum
}

export class Person {
  run(){
    console.log('run');
  }
}

export function ins(num1,num2) {
  return num1 * num2
}

const address = '杭州市'
export default address