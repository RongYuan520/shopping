import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

export const store = new Vuex.Store({
  state: {
    cartList: []
  },
  getters,
  mutations,
  actions
})