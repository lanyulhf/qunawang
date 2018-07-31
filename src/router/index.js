import Vue from 'vue'
import Router from 'vue-router'
import Purchase from '../pages/purchase/purchase'
import indexIn from '../components/index/indexIn'

import index from '../pages/index'
Vue.use(Router)

export default new Router({
  routes: [

{
  path: '/',
    name: 'index',
  component: index
},
    {
      path: '/Purchase',
      name: 'Purchase',
      component: Purchase
    },
    {
      path: '/indexIn',
      name: 'indexIn',
      component: indexIn
    }
  ]
})
