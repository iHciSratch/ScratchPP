<template>
  <div>
    <_header></_header>
    <homepage-body></homepage-body>
      <_footer></_footer>


  </div>

</template>

<script>


  import Header from '../header/header.vue';
  import HomepageBody from '../homepageBody/homepageBody.vue';
  import Footer from '../footer/footer.vue';
  export default{


    components: {
      '_header': Header,
      'homepage-body': HomepageBody,
      '_footer': Footer
    },

    data(){

    },

    mounted(){

    }
  }


</script>

<style scoped>

</style>
