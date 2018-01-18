<template>
  <swiper :options="swiperOption" class="swiper-container">
    <swiper-slide class="img-con" v-for="item of slider" :key="item.id">
      <img :src="item.imgUrl" class="slider-img">
    </swiper-slide>
  </swiper>
</template>

<script>
  export default {
    name: 'index-swiper',
    props: {
      slider: {
        type: Array,
        require: true
      }
    },
    data () {
      return {
        swiperOption: {
          autoplay: 3000,
          loop: true,
          initialSlide: 1,
          observer: true,
          observeParents: true
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .swiper-container
    height: 0
    padding-bottom: 44%
    .img-con
      overflow: hidden
      height: 0
      padding-bottom: 44%
      .slider-img
        width: 100%
</style>