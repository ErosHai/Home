<template>
	<div>
		<h1>HOME</h1>
		<router-link to="/home/homeMsg" tag="button" replace>消息</router-link>
		<router-link to="/home/homeNews" tag="button" replace>新闻</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'home',
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
