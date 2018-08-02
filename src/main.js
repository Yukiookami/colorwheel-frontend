import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import colorwheelhome from './components/colorwheelhome'
import newproduct from './components/newproduct'
import support from './components/support'
import artist from './components/artist'
import exhibition from './components/exhibition'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min.js'
import $ from 'jquery'
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: colorwheelhome},
    {path: '/newproduct', component: newproduct},
    {path: '/support', component: support},
    {path: '/artist', component: artist},
    {path: '/exhibition', component: exhibition}
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
