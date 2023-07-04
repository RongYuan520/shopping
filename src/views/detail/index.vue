<template>
  <div>
    <nav-bar></nav-bar>
    <base-info :info="baseInfo"></base-info>
    <shop-info :shop="shopInfo"></shop-info>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import BaseInfo from './components/BaseInfo.vue'
import ShopInfo from './components/ShopInfo.vue'
import { getDetail } from 'network/detail'
export default {
  name: 'detailVue',
  data () {
    return {
      iid: this.$route.query.id,
      baseInfo: {},
      shopInfo: {}
    }
  },
  components: {
    NavBar,
    BaseInfo,
    ShopInfo
  },
  computed: {
  },
  created () {
    this.getDetail()
  },
  mounted() {
    
  },
  methods: {
    initBaseInfo (result) {
      const {
        columns,
        itemInfo: {oldPrice, price: newPrice, desc, discountDesc, topImages},
        shopInfo: {
          services = []
        }
      } = result
      return {
        columns,
        services,
        oldPrice,
        newPrice,
        desc,
        discountDesc,
        topImages
      }
    },
    initShopInfo (result) {
      return result.shopInfo
    },
    getDetail () {
      getDetail(this.iid).then(res => {
        const {result = {}} = res
        this.baseInfo = this.initBaseInfo(result)
        this.shopInfo = this.initShopInfo(result)
      })
    }
  }
}
</script>
<style scoped>
.detail {
  padding: 20px;
}
.imgBack {
  width: 20px;
  height: 20px;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 13px;
}
.active {
  color: var( --color-high-text);
}
</style>
