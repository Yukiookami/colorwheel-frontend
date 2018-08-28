import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
// import './assets/css/reset.css'
// import './assets/css/base.css'
import colorwheelhome from './components/colorwheelhome'
import newproduct from './components/newproduct'
import support from './components/support'
import artist from './components/artist'
import exhibition from './components/exhibition'
import artistdetail from './components/artistdetail'
import exdetail from './components/exdetail'
import store from './components/store'
import storedetail from './components/storedetail'
import custom from './components/custom'
import model from './components/model'
import shopcart from './components/shopcart'
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: colorwheelhome},
    {path: '/newproduct', component: newproduct},
    {path: '/support', component: support},
    {path: '/artist', component: artist},
    {path: '/exhibition', component: exhibition},
    {path: '/artistdetail', component: artistdetail},
    {path: '/exdetail', component: exdetail},
    {path: '/store', component: store},
    {path: '/storedetail', component: storedetail},
    {path: '/custom', component: custom},
    {path: '/model', component: model},
    {path: '/shopcart', component: shopcart}
  ]
})

// 全局过滤器
Vue.filter('money', function (value, type) {
  return '¥' + value.toFixed(2) + type
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
