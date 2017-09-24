<template>
  <div style="clear:both;">


    <p class="cSubTitle">热门好课</p>
    <div style="width:200px;float:left;">
      <link-block v-bind:description="'适合7到9岁儿童'"></link-block>
    </div>
    <div style="width:200px;float:left;">
      <link-block v-bind:description="'适合7到9岁儿童'"></link-block>
    </div>
    <div style="width:200px;float:left;">
      <link-block v-bind:description="'适合7到9岁儿童'"></link-block>
    </div>
    <div style="width:200px;float:left;">
      <link-block v-bind:description="'适合7到9岁儿童'"></link-block>
    </div>
    <div style="width:200px;float:left;">
      <link-block v-bind:description="'适合7到9岁儿童'"></link-block>
    </div>
  </div>
</template>

<script>
  import LinkBlock from './homepageBody-linkBlock.vue'

  export default{
    components:{
      'link-block':LinkBlock,
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
