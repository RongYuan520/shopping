<template>
  <div id="tabbar">
    <TabBarItem type="home">
      <img slot="img" src="~assets/img/tabbar/home.svg"/>
      <div slot="label" >首页</div>
    </TabBarItem>
    <TabBarItem type="category"  >
      <img slot="img" src="~assets/img/tabbar/type.svg"/>
      <div slot="label" >分类</div>
    </TabBarItem>
    <TabBarItem type="cart"  >
      <img slot="img" src="~assets/img/tabbar/goods.svg"/>
      <div slot="label" >购物车</div>
    </TabBarItem>
    <TabBarItem type="profile"  >
      <img slot="img" src="~assets/img/tabbar/mine.svg"/>
      <div slot="label">我的</div>
    </TabBarItem>
    </div>
</template>
<script>
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  components: {
    TabBarItem
  },
  props: {
    // isActive: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data () {
    return {

    }
  },
  computed: {
  },
  methods: {

  }
}
</script>
<style>
#tabbar {
  display: flex;
  text-align: center;
  height: 49px;
  background: #ddd;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, .1);
}

</style>