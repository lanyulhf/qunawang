import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import service from '../pages/service/service'
import mine from '../pages/mine/mine'
import post from '../pages/post'
import order from '../pages/order_form'

import calender from '../components/buy/calender'
import choose from '../components/buy/choose'
import planeTicket from '../pages/planeTicket'
import planeTime from '../pages/planeTime'
import planePiao from '../pages/planePiao'
import find from '../pages/find/find'
import lists from '../pages/lists'

Vue.use(Router)

export default new Router({
  linkActiveClass:"tabActive",
  routes: [
    /*{
      path: '/',
      // redirect:'index',
      name: 'index',
      component: index
    },*/
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
{
  path: '/post',
    name: 'post',
  component: post
},
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/planeTicket',
      name: 'planeTicket',
      component: planeTicket
    },
 {
   path: '/calender',
     name: 'calender',
   component: calender
 },
    {
      path: '/choose',
      name: 'choose',
      component: choose
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/lists',
      name: 'lists',
      component: lists
    },
    {
      path: '/planePiao',
      name: 'planePiao',
      component: planePiao
    },
    {
      path: '/planeTime',
      name: 'planeTime',
      component: planeTime
    },
  ]
})
