<template>
	<div>
		<h2>THIS IS HOME</h2>
		<router-link to="/home/homeMsg">消息</router-link>
		<router-link to="/home/homeNews">新闻</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'home',
}
</script>

<style scoped></style>
