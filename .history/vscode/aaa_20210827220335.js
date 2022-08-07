import {
  name,
  sum
}
from './bbb.js';

console.log(name);
console.log(sum(12,3));


// ES6导出函数和Class
import {ins,Person} from './bbb.js'

console.log(ins(5,4));

const peoper = new Person()
peoper.run()


// export default 可以自定义名称，只能有一个
import adr from './bbb.js'
console.log(adr);

import * as obj from './bbb.js'
console.log(obj);