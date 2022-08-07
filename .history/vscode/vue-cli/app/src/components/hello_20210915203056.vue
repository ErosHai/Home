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
			path: '/home/Msg',
		}
	},
	created() {
		// console.log('home created')
	},
	destroyed() {
		// console.log('home destroyed')
	},
	activated() {
		console.log(this.path, 'activated')
		this.$router.push(this.path)
	},
	deactivated() {
		// console.log('home deactivated')
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
