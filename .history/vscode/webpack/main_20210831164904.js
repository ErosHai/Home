const { default: Vue } = require('vue');
const {name, sum} = require('./src/js/bbb.js')

console.log(name);
console.log(sum(265,23));

require('./src/css/normal.css')

require('./src/css/less.less')

require('./src/img/windows11.png')

const vm = new Vue({
  el:'#app',
  template:`
    <div>
      <h2> {{ msg }}</h2>
    </div>
  `
  data:{
    msg: 'Hello Webpack! '
  }
})