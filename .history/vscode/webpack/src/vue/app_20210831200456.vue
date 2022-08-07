<template>
  <div>
      <h2 class="title"> {{ msg }}</h2>
      <h2> {{ name }}</h2>
      <CpnVue />
  </div>
</template>

<script>
import CpnVue from './Cpn'

 export default{
    name:'app',
    components:{
      CpnVue
    },
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