<template>
  <div class="shop-info" v-if="Object.keys(shop).length">
    <div class="shop-top">
      <img :src="shop.logo"/>
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{ shop.cSells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.cGoods}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}
              <span>{{item.isBetter ? '高': '低'}}</span>
            </td>
          </tr> 
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    shop: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    shop: {
      handler: function () {
        // console.log(info)
      }
    }
  },
  filters: {
    sellCountFilter (val) {
      let result = val
      if (val > 1000) {
        result = (val / 10000).toFixed(2) + '万'
      }
      return result
    }
  },
  computed: {
    // sellCountFilter: {
    //   get: function () {
    //     return 1
    //   }
    // }
  }
}
</script>
<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 1px solid #f2f5f8;
}
.shop-top {
  line-height: 45px;
  display: flex;
  align-items: center;
}
.shop img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, .1);
}
</style>