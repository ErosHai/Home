<template>
	<div>
		<h2>用户界面</h2>
		<h3>用户名：{{ user() }}</h3>
		<h3>密码：{{ $route.params.userId }}</h3>
	</div>
</template>

<script>
export default {
	name: 'user',
	methods: {
		user() {
			return this.$route.params.userId
		},
	},
}
</script>

<style></style>
