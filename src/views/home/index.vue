<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="pre"></div>
      <div slot="content">首页</div>
      <div slot="after"></div>
    </nav-bar>
    <recommand-vue :recommands="recommend"></recommand-vue>
    <feature></feature>
    <tab-controll :types="HOMETYPES" class="tab-controll" @changeTab="changeTab"></tab-controll>
    <goods-list :goods="goods[type]['list']"></goods-list>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue';

import TabControll from 'components/content/TabControll.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';

import RecommandVue from './components/ReCommand.vue'
import Feature from './components/Feature.vue';

import { getHomeList,  getHomeGoods } from 'network/home'

import { HOMETYPES } from 'common/const'

export default {
  name: 'homeVue',
  components: {
    NavBar,
    RecommandVue,
    Feature,
    TabControll,
    GoodsList
  },
  data () {
    return {
      recommend: [],
      banners: [],
      HOMETYPES,
      goods: {
        pop: {
          page: 0, 
          list: []
        },
        new: {
          page: 0, 
          list: []
        },
        sell: {
          page: 0, 
          list: []
        }
      },
      type: 'pop'
    }
  },
  created () {
    this.getHomeList()
    this.getHomeGoods(this.type, 1)
  },
  methods: {
    getHomeList() {
      getHomeList()
       .then(res => {
        if (res.success) {
          this.result = res.data
          const {recommend: {list}, banner: {list: list1}} = res.data
          this.recommend = list
          this.banners = list1
        }
       })
       .catch(err => {
        console.log(err)
      })
    },
    getHomeGoods(type) {
      const nextPage = this.goods[type].page + 1
      getHomeGoods(type, nextPage)
       .then(res => {
        if (res.success) {
          const { list = [], page = 1} = res.data
          this.goods[type].list.push(...list) 
          this.goods[type].page = page + 1
          console.log('goods', this.goods)
        }
       })
       .catch(err => {
        console.log(err)
      })
    },
    changeTab (item) {
      console.log(item)
      this.type = item
      this.getHomeGoods(item)
    }
  }
}
</script>
<style scoped>
.home-nav {
  background: var(--color-tint);
}
.tab-controll {
  position: sticky;
  top: 40px;
  z-index: 9999;
}
</style>
