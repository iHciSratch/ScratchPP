<template>
  <div>
    <div style="width:160px;height:160px;">
      <img class="cImgBlock" v-bind:src="imgSrc"/>
      <div class="cDivText">
        <p class="cDescText">{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      imgSrc: {type: String, default: 'static/test.jpg'},
      description: {type: String, default: 'def'},
    },
    data(){
      return {}
    }
  }
</script>

<style scoped>
  div {
    padding: 0px;
    margin: 0px;
  }

  .cImgBlock {
    width: 100%;
    height: 100%;

    border-width: 4px;
    border-style: solid;
    border-color: #e7d691;
    border-radius: 10px;

  }

  .cDivText {
    width: 152px;
    position: relative;
    top: -40px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.4);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    margin-left: 4px;
    text-align: center;

  }

  .cDescText {
    color: #e5c121;
    font-size: 12px;
    padding-top: 7px;
  }

</style>
