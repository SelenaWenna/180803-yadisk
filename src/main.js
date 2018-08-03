// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store'
import router from './router/router'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Icons from './components/Icons'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.component('icons', Icons)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
