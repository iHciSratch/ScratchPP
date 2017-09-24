<template>

  <div class="cSlider">
    <Carousel v-model="value1">
      <CarouselItem>
        <div class="demo-carousel">1</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">2</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">3</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">4</div>
      </CarouselItem>
    </Carousel>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        value1: 0
      }
    }
  }
</script>

<style>
  .cSlider{
    width:800px;
  }

  .demo-carousel{
    width:800px;
    height:300px;
    background-color: chartreuse;
  }
</style>
