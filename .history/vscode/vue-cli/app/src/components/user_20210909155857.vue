<template>
	<div>
		<h2>用户界面</h2>
		<h3>用户名：</h3>
		<h3>密码：</h3>
	</div>
</template>

<script>
export default {
	name: 'user',
	computed: {
    user(){
      return this.$route.params.
    }
  },
}
</script>

<style></style>
