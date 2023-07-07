import { ADDCART, ADDCOUNTER } from './mutation.type'
export const mutations = {
  [ADDCOUNTER] (state, payload) {
    payload.count++
  },
  [ADDCART] (state, payload) {
    state.cartList.push(payload)
  }
}