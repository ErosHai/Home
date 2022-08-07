<template>
  <div>
      <h2 > {{ msg }}</h2>
      <h2 class="title"> {{ name }}</h2>
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
        name: '沈小姐'
      }
  }
 }
</script>

<style scope>
  .title{
    color: rgba(184, 233, 69, 0.705);
  }
</style>