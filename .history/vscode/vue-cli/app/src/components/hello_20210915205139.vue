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
	activated() {
		console.log('activated')
		this.$router.push(this.path)
	},
	deactivated() {
		console.log('home deactivated')
	},
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
