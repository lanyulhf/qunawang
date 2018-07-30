// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "swiper/dist/css/swiper.css"
import MintUI from 'mint-ui'
import "mint-ui/lib/style.css"
import store from './vuex/store'
import jquery from './assets/js/jquery.js'
import lazyload from "vue-lazyload"
Vue.use(lazyload,
  { loading:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532968503830&di=49cf579fa356eca1bde198d92f83b100&imgtype=0&src=http%3A%2F%2Fimage002.server110.com%2F20170525%2Fe44fdf626044a72117998dee8c1d2864.gif'})
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  jquery,
  store,
  components: { App },
  template: '<App/>'
})
