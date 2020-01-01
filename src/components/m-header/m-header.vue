<template>
  <div class="m-header">
    <div class="left">
      <slot name="left"/>
    </div>
    <div class="center">
      <van-notice-bar :text="title"/>
    </div>
    <div class="right">
      <slot name="right"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'm-header',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .m-header
    box-sizing border-box
    width 100%
    height 44px
    line-height 44px
    padding 0 15px
</style>
