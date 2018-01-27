import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/login/index'
import Mine from 'pages/home/mine/index'
import Setting from 'pages/home/setting/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/community'
    }, {
      path: '/community',
      name: 'community',
      component: () => import('pages/home/community/index')
    }, {
      path: '/channel',
      name: 'channel',
      component: () => import('pages/home/channel/index')
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: () => import('pages/regist/index')
    }, {
      path: '/choiceness/topic',
      name: 'topic',
      component: () => import('pages/topic/index')
    }, {
      path: '/choiceness/special',
      name: 'special',
      component: () => import('pages/special/index')
    }, {
      path: '/choiceness/article',
      name: 'article',
      component: () => import('pages/article/index')
    }, {
      path: '/choiceness/cert',
      name: 'cert',
      component: () => import('pages/certification/index')
    }, {
      path: '/tips',
      name: 'tips',
      component: () => import('pages/home/tips/index')
    }, {
      path: '/mine',
      name: 'mine',
      component: Mine
    }, {
      path: '/publish',
      name: 'publish',
      component: () => import('pages/publish/index')
    }, {
      path: '/setting',
      name: 'setting',
      component: Setting
    }, {
      path: '/article/detail',
      name: 'detail',
      component: () => import('pages/detail/index')
    }
  ]
})
