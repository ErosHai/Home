import Vue from 'vue'
import VueRouter from 'vue-router'
// import home from '../components/hello.vue'
// import about from '../components/about.vue'
// import user from '../components/user.vue'

// 路由懒加载ES6写法
const home = () => import('../components/hello.vue')
const about = () => import('../components/about.vue')
const user = () => import('../components/user.vue')
const homeMsg = () => import('../components/homeMsg.vue')
const homeNews = () => import('../components/homeNews.vue')

Vue.use(VueRouter)

// 配置路由和路径的隐射关系
const routes = [
	{
		path: '/',
		redirect: '/home',
		meta: '首页',
	},
	{
		path: '/home',
		component: home,
		children: [
			{
				path: '/',
				redirect: 'News',
			},
			{
				path: 'Msg',
				component: homeMsg,
			},
			{
				path: 'News',
				component: homeNews,
			},
		],
	},
	{
		path: '/about',
		component: about,
	},
	{
		path: '/user/:Id', // 动态路由获取参数方式
		component: user,
	},
]

const router = new VueRouter({
	routes,
	mode: 'history',
	linkActiveClass: 'active',
})
export default router
