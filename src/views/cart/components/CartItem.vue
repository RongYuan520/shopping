<template>
  <div class="cart-item">
    <div class="img">
      <img :src="item.image" alt=""/>
    </div>
    <div class="content">
      <div class="title">{{item.title || '0000'}}</div>
      <div class="desc">{{item.desc}}</div>
      <div class="line">
        <div class="price line-item">¥{{item.realPrice}}</div>
        <div class="line-item count">*{{item.count}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cartItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    item: {
      handler: (val) => {
        console.log(val)
      }
    }
  }
}
</script>
<style scoped>
.cart-item {
  display: flex;
  height: 88px;
  border-bottom: 1px solid #333;
}
.cart-item .img{
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.cart-item img{
  width: 60px;
  height: 60px;
  border-radius: 20%;
}
.cart-item .content {
  display: flex;
  /* flex: 1;
   */
   flex-direction: column;
   overflow: hidden;
   /* align-items: center; */
}
.content .title {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.content .desc {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.line {
  display: flex;
}
.line-item {
  flex: 1;
}
.price {
  color: var(--color-tint);
  font-size: 14px;
  text-align: left;
}
.count {
  text-align: right;
}
</style>