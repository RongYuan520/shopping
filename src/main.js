import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import toast from 'components/common/toast/index.js'
import VueLaytLoad from 'vue-lazyload'
import ElementUI from 'element-ui'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast)
Vue.use(VueLaytLoad,
  {
    loading: require('./assets/img/common/placeholder.jpg')
  })
Vue.use(ElementUI)

const vm = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
console.log('vm', vm)
