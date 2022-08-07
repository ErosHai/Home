import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/hello.vue'
import about from '../components/about.vue'
import user from '../components/user.vue'

Vue.use(VueRouter)

// 配置路由和路径的隐射关系
const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		component: home,
	},
	{
		path: '/about',
		component: about,
	},
	{
		path: '/user/:userId',
		component: user,
	},
]

const router = new VueRouter({
	routes,
	mode: 'history',
	linkActiveClass: 'active',
	components: {
		home,
		about,
	},
})
export default router
