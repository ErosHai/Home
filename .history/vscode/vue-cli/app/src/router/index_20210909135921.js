import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/hello.vue'
import about from '../components/about.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/home',
		component: 'home',
	},
	{
		path: '/about',
		component: 'about',
	},
]

const router = new VueRouter({
	routes,
	component: {
		home,
		about,
	},
})
export default router
