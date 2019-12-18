import Vue from 'vue'

// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  // basic
  Button,
  // scroll
  Scroll
} from 'cube-ui'

Vue.use(Button)
Vue.use(Scroll)
