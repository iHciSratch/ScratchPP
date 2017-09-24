// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import Swiper from 'vue-awesome-swiper'
var SwiperCSS=require('swiper/dist/css/swiper.css')
Vue.use(Swiper)
Vue.use(SwiperCSS)

import iView from 'iview'
var iViewCSS=require('iview/dist/styles/iview.css')
Vue.use(iView)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
