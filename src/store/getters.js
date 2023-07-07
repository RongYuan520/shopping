export const getters = {
  cartLength (state) {
    return state.cartList.length
  },
  cartList (state) {
    return state.cartList
  },
  totalPrice (state, getters) {
    let sum = getters.cartList.reduce((pre, cur) => {
      return pre + cur.realPrice * cur.count
    }, 0)
    return sum.toFixed(2)
  }
}