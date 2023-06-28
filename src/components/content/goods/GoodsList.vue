<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :good="item" :key="item.img" class="item"></goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem.vue';
export default {
  name: 'goodsList',
  props: {
    goods: {
      type: Array,
      default: () => []
    }
  },
  components: {
    GoodsListItem
  }
}
</script>
<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
}
</style>