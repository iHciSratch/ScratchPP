<template>
  <div>
    <div>
      <_header></_header>
    </div>

    <div style="position:relative;left:10%;width:300px;float:left;">
      <login-frame></login-frame>
    </div>
    <div style="position:relative;left:20%;width:200px;top:80px;overflow: hidden;">
      <login-link></login-link>
    </div>


  </div>

</template>

<script>


  import Header from '../header/header.vue';
  import LoginFrame from '../loginFrame/loginFrame.vue';
  import LoginLink from '../loginLink/loginLink.vue';

  export default{


    components: {
      '_header': Header,
      'login-frame': LoginFrame,
      'login-link': LoginLink
    },

    data(){

    },

    mounted(){

    }
  }


</script>

<style scoped>

</style>
