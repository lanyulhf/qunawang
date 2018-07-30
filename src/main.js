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
