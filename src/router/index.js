import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/home/index'
import Login from 'pages/login/index'
import Register from 'pages/register/index'

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
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
