import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import service from '../pages/service/service'
import mine from '../pages/mine/mine'
import post from '../pages/post'

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
}
  ]
})
