import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile')
    }
  ]
})
