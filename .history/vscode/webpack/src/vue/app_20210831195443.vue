<template>
  <div>
      <h2 class="title"> {{ msg }}</h2>
      <h2> {{ name }}</h2>
  </div>
</template>

<script>
import CpnVue from './Cpn.vue'

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
  .title{
    color: blue;
  }
</style>