<template>
  <div>
          <h2> {{ msg }}</h2>
      <h2> {{ name }}</h2>
  </div>
</template>

<script>
 export default{
   name:'app',
     data(){
    return {
      msg: 'Hello My Webpack',
      name: 'Yang Li'
    }
  }
 }
</script>

<style scope>

</style>