import Vue from 'vue'
import VueRouter from 'vue-router'
import Sort from '../views/Sort.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', redirect: 'sort' },
    { path: '/sort', name: 'sort', component: Sort },
    { path: '*', redirect: 'home' }
  ]
})