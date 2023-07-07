import { ADDCART, ADDCOUNTER } from './mutation.type'
export const actions = {
  addToCart (context, payload) {
    return new Promise((resolve, reject) => {
      const { state, commit } = context
      let cartList = state.cartList
      const index = cartList.findIndex(item => item.iid === payload.iid)
      if (index > -1) {
        // cartList[index].count++
        commit(ADDCOUNTER, cartList[index])
        resolve('数量+1')
      } else {
        payload.count = 1
        // cartList.push(payload)
        commit(ADDCART, payload)
        resolve('添加新商品')
      }
    })
  }
}