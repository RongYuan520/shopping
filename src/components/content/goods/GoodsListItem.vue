<template>
  <div class="goods-list-item" @click="gotoDetail">
    <div class="img">
        <img :src="good.show.img" @load="imgLoaded"/>
    </div>
    <div class="title">
      <p>{{good.title}}</p>
      <span class="price">{{good.price}}</span>
      <span>{{good.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'goodsListItem',
  props: {
    good: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    imgLoaded () {
      this.$bus.$emit('itemImgLoad')
    },
    gotoDetail () {
      console.log('gotoDetail', this.good)
      this.$router.push({
        path: '/detail',
        query: {
          id: this.good.iid
        }
      })
    }
  }
}
</script>
<style scoped>
.goods-list-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
  padding: 3px;
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-list-item .title {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-list-item p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-list-item .price {
  color: var(--color-tint);
  margin-right: 20px;
}
</style>