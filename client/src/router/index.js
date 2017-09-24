import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import VueRouter from 'vue-router'

import Homepage from '@/components/PAGES/PAGE-homepage'
import Login from '@/components/PAGES/PAGE-login'

import Test from '@/components/test'

Vue.use(VueRouter);

export default new Router({
  routes: [
    {
      path: '/',
      component: Homepage
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/test',
      component: Test
    }
  ]
})
