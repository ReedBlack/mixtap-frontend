import Vue from 'vue'
import App from './App.vue'
import VueProgress from 'vue-progress-path'
import VueCircle from 'vue2-circle-progress'
import router from './router'

Vue.use(VueProgress)
Vue.use(VueCircle)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')