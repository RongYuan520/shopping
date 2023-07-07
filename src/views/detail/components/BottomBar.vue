<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon service"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon service"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
      
  </div>
</template>
<script>
export default {
  methods: {
    addToCart () {
      this.$emit('addToCart')
    }
  }
}
</script>
<style scoped>
.bottom-bar {
  height: 49px;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  text-align: center;
}
.bar-item {
  flex: 1;
  display: flex;
  line-height: 49px;
}
.bar-item>div {
  flex: 1;
}
.bar-left .text {
  font-size: 13px;
}
/* .bar-left .icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 3px;
} */
.bar-right .cart {
  background: #efef5a;
}
.bar-right .buy {
  background: var(--color-tint);
}
</style>