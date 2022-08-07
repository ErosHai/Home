const { default: Vue } = require('vue');
const {name, sum} = require('./src/js/bbb.js')

console.log(name);
console.log(sum(265,23));

require('./src/css/normal.css')

require('./src/css/less.less')

require('./src/img/windows11.png')

import app from './src/vue/app.js';
import App from (./vue/app.js)

const vm = new Vue({
  el:'#app',
  template:'<App />',
  components:{
    App
  }
})