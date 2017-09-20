import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import VueRouter from 'vue-router'

import Homepage from '@/components/PAGES/PAGE-homepage'
import Login from '@/components/PAGES/PAGE-login'


Vue.use(VueRouter);

//test for Github

export default new Router({
  routes: [
    {
      path: '/',
      component: Homepage
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
