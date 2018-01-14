import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/login/index'
import Community from 'pages/home/community/index'
import Channel from 'pages/home/channel/index'
import Tips from 'pages/home/tips/index'
import Register from 'pages/register/index'
import Topic from 'pages/topic/index'
import Special from 'pages/special/index'
import Article from 'pages/article/index'
import Certification from 'pages/certification/index'
import Mine from 'pages/home/mine/index'

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
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/choiceness/topic',
      name: 'topic',
      component: Topic
    }, {
      path: '/choiceness/special',
      name: 'special',
      component: Special
    }, {
      path: '/choiceness/article',
      name: 'article',
      component: Article
    }, {
      path: '/choiceness/cert',
      name: 'cert',
      component: Certification
    }, {
      path: '/tips',
      name: 'tips',
      component: Tips
    }, {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
