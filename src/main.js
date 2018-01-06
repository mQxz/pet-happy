import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import 'styles/bases/border.css'
import 'styles/bases/reset.css'
import 'styles/bases/iconfont/iconfont.css'

Vue.config.productionTip = false
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
