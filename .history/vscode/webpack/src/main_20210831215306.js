const { default: Vue } = require('vue');
const {name, sum} = require('./js/bbb.js')

console.log(name);
console.log(sum(265,23));

require('./src/css/normal.css')

require('./src/css/less.less')

require('./src/img/windows11.png')

// import App from './src/vue/app.js';
import App from './src/vue/app.vue'

const vm = new Vue({
  el:'#app',
  template:'<App />',
  components:{
    App
  }
})
