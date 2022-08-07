import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: function(createElement){
    return createElement('h2',{class:'box'},['Hello World!'])
  }
})