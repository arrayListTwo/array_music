import Vue from 'vue'
import './cube-ui' // cube-ui library
import './vant-plugin' // Vant library
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/icons/index.js' // register vue-icon component

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
