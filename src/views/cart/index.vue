<template>
  <div class="cart">
    <nav-bar class="home-nav">
      <div slot="pre"></div>
      <!-- <div slot="content">购物车({{$store.getters.cartLength}})</div> -->
      <div slot="content">购物车({{length}})</div>
      <div slot="after"></div>
    </nav-bar>
    <div class="cart-list">
      <cart-item v-for="cart in list" :item="cart" :key="cart.iid" :totalPrice="totalPrice"></cart-item>
    </div>
    <SumTab/>
    <TabBar/>

  </div>
</template>
<script>
import CartItem from './components/CartItem.vue';
import NavBar from 'components/common/navbar/NavBar.vue';
import TabBar from 'components/content/TabBar.vue'
import SumTab from './components/SumTab.vue'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  components: {
    CartItem,
    NavBar,
    TabBar,
    SumTab
  },
  computed: {
    // 两种语法
    // ...mapGetters(['cartLength', 'cartList'])
    ...mapGetters({
      list: 'cartList',
      length: 'cartLength',
      totalPrice: 'totalPrice'
    })
  }
}
</script>
<style>
.home-nav {
  background: var(--color-tint);
}
.cart-list {
  padding: 0 10px;
}
</style>
