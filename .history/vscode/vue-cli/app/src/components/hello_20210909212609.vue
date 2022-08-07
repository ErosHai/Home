<template>
	<div>
		<h2>THIS IS HOME</h2>
		<router-link to="/homeMsg">消息</router-link>
		<router-link to="/homeNews">新闻</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'home',
}
</script>

<style scoped></style>
