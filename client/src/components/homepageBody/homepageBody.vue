<template>
  <div >
    <div style="position:relative;left:280px;width:800px;">
      <head-image></head-image>
    </div>
    <div style="height:20px;"></div>
    <div style="background-color:#fef8de;height:540px;padding-top:20px;">
      <div style="margin-left:180px;">
        <course-list></course-list>
      </div>
      <div style="height:200px;"></div>
      <div style="margin-left:180px;">
        <works-list></works-list>
      </div>
    </div>
    <div style="margin-left:180px;">
      <user-list></user-list>
    </div>
  </div>
</template>

<script>
  import HeadImage from './homepageBody-headImage.vue'
  import CourseList from './homepageBody-courseList.vue'
  import WorksList from './homepageBody-worksList.vue'
  import UserList from './homepageBody-userList.vue'




  export default{
    components:{
      'head-image':HeadImage,
      'course-list':CourseList,
      'works-list':WorksList,
      'user-list':UserList

    },

    props: {
    },
    data(){
      return {}
    }
  }
</script>

<style scoped>

</style>
