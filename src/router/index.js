import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/login/index'
import Community from 'pages/home/community/index'
import Channel from 'pages/home/channel/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/community'
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    {
      path: '/channel',
      name: 'channel',
      component: Channel
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
