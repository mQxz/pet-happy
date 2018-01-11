import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/home/index'
import Login from 'pages/login/index'
import Register from 'pages/register/index'
import Topic from 'pages/topic/index'
import Special from 'pages/special/index'
import Article from 'pages/article/index'
import Certification from 'pages/certification/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/topic',
      name: 'topic',
      component: Topic
    }, {
      path: '/special',
      name: 'special',
      component: Special
    }, {
      path: '/article',
      name: 'article',
      component: Article
    }, {
      path: '/cert',
      name: 'cert',
      component: Certification
    }
  ]
})
