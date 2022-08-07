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
	created() {
		console.log('home created')
	},
	destroyed() {
		console.log(this.$route.path)
		console.log('home destroyed')
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
