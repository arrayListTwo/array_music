<template>
  <div class="home">
    <cube-scroll>
      <p @click="onClick">lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <swiper :options="swiperOption" class="my-swiper">
        <swiper-slide @click.native="onSwiperSlideClick">I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
      </swiper>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
      <p>lsl</p>
    </cube-scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'home',
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        swiperOption: {
          preventClicksPropagation: true
        }
      }
    },
    methods: {
      onClick () {
        console.log('onClick')
      },
      callback (event) {
        console.log(event)
        console.log('callback')
      },
      onSwiperSlideClick () {
        console.log('onSwiperSlideClick')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    position fixed
    top 0
    bottom 0
    width 100%

    .my-swiper
      height 50px
</style>
