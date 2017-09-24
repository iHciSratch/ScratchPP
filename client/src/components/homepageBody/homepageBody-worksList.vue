<template>
  <div style="clear:both;">

    <!--<div style="width:15%;float:left;">-->
      <!--<Headline></Headline>-->
    <!--</div>-->
    <!--<div style="width:15%;float:left;">-->
      <!--<Guidance :text="'首页'"></Guidance>-->
    <!--</div>-->
    <!--<div style="width:15%;float:left;">-->
      <!--<Guidance :text="'课程'"></Guidance>-->
    <!--</div>-->
    <!--<div style="width:10%;float:left;">-->
      <!--<Mascot></Mascot>-->
    <!--</div>-->
    <!--<div style="width:15%;float:left;">-->
      <!--<Guidance :text="'作品'"></Guidance>-->
    <!--</div>-->
    <!--<div style="width:15%;float:left;">-->
      <!--<Guidance :text="'课程'"></Guidance>-->
    <!--</div>-->
    <!--<div style="width:15%;float:left;">-->
      <!--<LoginLink></LoginLink>-->
    <!--</div>-->
    <p class="cSubTitle">优秀作品</p>
    <div style="width:200px;float:left;">
      <link-block v-bind:description="'消消乐'"></link-block>
    </div>
    <div style="width:200px;float:left;">
      <link-block v-bind:description="'消消乐'"></link-block>
    </div>
    <div style="width:200px;float:left;">
      <link-block v-bind:description="'消消乐'"></link-block>
    </div>
    <div style="width:200px;float:left;">
      <link-block v-bind:description="'消消乐'"></link-block>
    </div>
    <div style="width:200px;float:left;">
      <link-block v-bind:description="'消消乐'"></link-block>
    </div>
    <br/>
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
