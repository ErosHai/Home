import Vue from 'vue'
import App from './App.vue'
import router from 'vue-router'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router,
}).$mount('#app')

// const cpn = {
//   template:'<div> {{msg}} </div> ',
//   data(){
//     return{
//       msg:'Hello Im cpn~'
//     }
//   }
// }

// new Vue({
//   render: function(createElement){
//     // return createElement('h2',{class:'box'},['Hello Sea!'])
//     return createElement(cpn)
//   }
// }).$mount('#app')
