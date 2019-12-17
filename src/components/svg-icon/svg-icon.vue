<template>
  <div v-if="isExternal"
       :style="styleExternalIcon"
       class="svg-external-icon svg-icon"></div>
  <svg v-else :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script type="text/ecmascript-6">
  import { isExternal } from '@/utils/validate'

  export default {
    name: 'svg-icon',
    props: {
      iconClass: {
        type: String,
        required: true
      },
      className: {
        type: String,
        default: ''
      }
    },
    computed: {
      isExternal () {
        return isExternal(this.iconClass)
      },
      iconName () {
        return `#icon-${this.iconClass}`
      },
      svgClass () {
        if (this.className) {
          return 'svg-icon ' + this.className
        } else {
          return 'svg-icon'
        }
      },
      styleExternalIcon () {
        return {
          mask: `url(${this.iconClass}) no-repeat 50% 50%`,
          '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .svg-icon
    width: 1em
    height: 1em
    vertical-align -0.15em
    fill rgba(0, 0, 0, 0)
    overflow: hidden
</style>
