import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DJ from './views/DJ.vue'
import PartyPeople from './views/PartyPeople.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/partypeople',
      name: 'partypeople',
      component: PartyPeople
    },
    {
      path: '/dj',
      name: 'dj',
      component: DJ
    }
  ]
})