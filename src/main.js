import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueAweSomeSwiper from 'vue-awesome-swiper'
import 'styles/bases/border.css'
import 'styles/bases/reset.css'
import 'styles/bases/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueAweSomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
