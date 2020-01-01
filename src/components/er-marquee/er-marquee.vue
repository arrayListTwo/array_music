<template>
  <div class="marquee" ref="marquee">
    <div class="content play" :class="animationClass" ref="marqueeContent">
      {{text}}
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'marquee',
    props: {
      text: {
        type: String,
        required: true
      },
      speed: {
        type: Number,
        default: 50
      }
    },
    data () {
      return {
        wrapWidth: 0,
        contentWidth: 0,
        duration: 0,
        animationClass: ''
      }
    },
    /* watch: {
      text: {
        handler () {
          this.$nextTick(() => {
            const wrapWidth = this.$refs.marquee.getBoundingClientRect().width
            const contentWidth = this.$refs.marqueeContent.getBoundingClientRect().width
            console.log(`wrapWidth: ${wrapWidth}, contentWidth: ${contentWidth}`)
            if (contentWidth > wrapWidth) {
              this.wrapWidth = wrapWidth
              this.contentWidth = contentWidth
              this.duration = contentWidth / this.speed
              this.animationClass = 'play'
            }
          })
        },
        immediate: true
      }
    },*/
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  .marquee
    position relative
    overflow hidden
    height 40px
    line-height 40px
    padding 0 6px

    .content
      position absolute
      white-space nowrap

    .play
      animation: bar-play-infinite 15.26s linear 0s infinite both

  @keyframes bar-play
    to
      transform: translate3d(-100%, 0, 0)

  @keyframes bar-play-infinite
    to
      transform: translate3d(-100%, 0, 0)
</style>
