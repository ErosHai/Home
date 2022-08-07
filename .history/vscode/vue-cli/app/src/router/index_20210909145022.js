import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/hello.vue'
import about from '../components/about.vue'

Vue.use(VueRouter)

// 配置路由和路径的隐射关系
const routes = [
	{
		path: 'home',
		component: 'home',
	},
	{
		path: 'about',
		component: 'about',
	},
]

const router = new VueRouter({
	routes,
	components: {
		home,
		about,
	},
})
export default router
