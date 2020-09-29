import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { HelloWorld } from 'zoom'
Vue.component(HelloWorld.name, HelloWorld)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
