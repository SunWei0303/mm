import Vue from 'vue'
import VueRouter from 'vue-router'
import list from '@/components/list'
import details from '@/components/details'
import car from '@/components/car'
import account from '@/components/account'
import myIndent from '@/components/myIndent'
import myAddress from '@/components/myAddress'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/car',
      name: 'car',
      component: car
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path: '/myAddress',
      name: 'myAddress',
      component: myAddress
    },
    {
      path: '/myIndent',
      name: 'myIndent',
      component: myIndent
    }
  ]
})
export default router
