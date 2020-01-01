<template>
  <div class="home">
    <van-notice-bar :text="vanMarquee"/>
    <er-marquee :text="marquee"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import ErMarquee from 'components/er-marquee/er-marquee'

  export default {
    name: 'home',
    components: {
      ErMarquee
    },
    data () {
      return {
        vanMarquee: '人性的弱点人性的弱点人性的弱点人性的弱点人性的弱点人性的弱点',
        marquee: '人性的弱点人性的弱点人性的弱点人性的弱点人性的弱点人性的弱点'
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
