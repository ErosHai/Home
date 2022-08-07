<template>
	<div>
		<h1>HOME</h1>
		<router-link to="/home/Msg" tag="button" replace>消息</router-link>
		<router-link to="/home/News" tag="button" replace>新闻</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			path: '/home/News',
		}
	},
	// Vue生命周期 创建
	created() {
		console.log('home created')
	},
	// Vue生命周期 销毁
	destroyed() {
		console.log('home destroyed')
	},
	// 组件处于活跃状态
	activated() {
		console.log('home activated')
		this.$router.push(this.path).catch(() => {})
	},
	// 组件处于停用状态
	deactivated() {
		console.log('home deactivated')
	},
	// 组件守卫
	beforeRouteLeave(to, from, next) {
		console.log(this.$route.path)
		this.path = this.$route.path
		next()
	},
}
</script>

<style>
ul,
li,
a {
	list-style: none;
	text-decoration: none;
}
</style>
