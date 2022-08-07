<template>
	<div id="app">
		<router-link to="/home" tag="button" replace> home </router-link>

		<!-- 获取动态路由查询值方式 -->
		<router-link
			:to="{ path: '/about', query: { name: 'yangli', age: 28 } }"
			tag="button"
			replace
		>
			about
		</router-link>
		<router-link :to="'/user/' + userID" tag="button" replace>
			user
		</router-link>
		<button @click="btnClick">button</button>
		<button @click="queryClick">query</button>

		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			userID: 'zhangsan',
		}
	},
	methods: {
		btnClick() {
			this.$router.replace('/button')
		},
		queryClick() {
			this.$router.replace({
				path: '/about',
				query: {
					name: 'zhanghai',
					age: 28,
				},
			})
		},
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
#app button {
	margin: 10px;
}
.active {
	color: #f00;
}
</style>
