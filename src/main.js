import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import toast from 'components/common/toast/index.js'
import VueLaytLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast)
Vue.use(VueLaytLoad,
  {
    loading: require('./assets/img/common/placeholder.jpg')
  })

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
