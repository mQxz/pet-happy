import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/home/index'
import Login from 'pages/login/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'index',
      component: Index
    },
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
