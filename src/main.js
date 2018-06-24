import Vue from 'vue'
import App from './App.vue'
import VueProgress from 'vue-progress'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueFuse from 'vue-fuse'

Vue.use(VueFuse)
Vue.use(BootstrapVue)
Vue.use(VueProgress)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')