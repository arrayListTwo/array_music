import Vue from 'vue'
import SvgIcon from '@/components/svg-icon/svg-icon'

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(require.context('./svg', false, /\.svg$/))
