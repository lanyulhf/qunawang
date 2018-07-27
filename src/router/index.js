import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import service from '../pages/service/service'
import mine from '../pages/mine/mine'
import post from '../pages/post'
import order from '../pages/order_form'
import planeTicket from '../components/buy/planeTicket'
import calender from '../components/buy/calender'
import choose from '../components/buy/choose'

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
    }
  ]
})
