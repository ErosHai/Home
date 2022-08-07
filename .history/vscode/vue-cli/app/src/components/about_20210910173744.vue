<template>
	<div>
		<h1>ABOUT</h1>
		{{ $route.query.name }}
		{{ $route.query.age }}
	</div>
</template>

<script>
export default {
	name: 'about',
	created() {
		document.title = 'about'
	},
}
</script>

<style scoped></style>
