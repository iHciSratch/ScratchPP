<template>
  <div style="clear:both;height:240px;">

    <p class="cSubTitle">大触出没</p>
    <div style="width:200px;float:left;">
      <user-block></user-block>
    </div>
    <div style="width:200px;float:left;">
      <user-block></user-block>
    </div>
    <div style="width:200px;float:left;">
      <user-block></user-block>
    </div>
    <div style="width:200px;float:left;">
      <user-block></user-block>
    </div>
    <div style="width:200px;float:left;">
      <user-block></user-block>
    </div>
    <br/>
  </div>
</template>

<script>
  import UserBlock from './homepageBody-userBlock.vue'

  export default{
    components:{
      'user-block':UserBlock,
    },

    props: {
    },
    data(){
      return {}
    }
  }
</script>

<style scoped>
  .cSubTitle{
    font-size:30px;
    font-family:微软雅黑;
    font-weight:bold;
    margin:14px;
  }
</style>
