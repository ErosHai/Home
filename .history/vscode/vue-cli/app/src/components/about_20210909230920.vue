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
}
</script>

<style scoped></style>
