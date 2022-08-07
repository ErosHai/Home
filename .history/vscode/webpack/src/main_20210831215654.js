const { default: Vue } = require('vue');
const {name, sum} = require('.src/js/bbb.js')

console.log(name);
console.log(sum(265,23));

require('./css/normal.css')

require('./css/less.less')

require('./img/windows11.png')

// import App from './src/vue/app.js';
import App from './vue/app.vue'

const vm = new Vue({
  el:'#app',
  template:'<App />',
  components:{
    App
  }
})

