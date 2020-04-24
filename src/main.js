import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import commen from './utils/commen'
import http from './utils/http'
import './components/components'

Vue.prototype.$http = http;
Vue.use(VueAwesomeSwiper);
Vue.use(commen)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
