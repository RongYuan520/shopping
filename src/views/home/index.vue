<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="pre"></div>
      <div slot="content">首页</div>
      <div slot="after"></div>
    </nav-bar>
    <tab-controll ref="tabControll" :types="HOMETYPES" class="tab-controll1" 
      @changeTab="changeTab" v-show="isFixed"></tab-controll>
    <scroll-vue rootclass="wrapper" ref="scrollWrapper" 
    :probeType="3"
    @scroll="contentScroll"
    :pullUpLoad="true"
    @pullingUp="loadMore">
      <recommand-vue :recommands="recommend"></recommand-vue>
      <feature @imgLoaded="imgLoaded"></feature>
      <tab-controll ref="tabControll" :types="HOMETYPES" class="tab-controll" 
      @changeTab="changeTab" v-show="!isFixed"></tab-controll>
      <back-top @click.native="backClick" v-show="showBackTop"></back-top>
      <goods-list :goods="goods[type]['list']"></goods-list>
    </scroll-vue>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import ScrollVue from 'components/common/scroll/Scroll.vue'

import TabControll from 'components/content/TabControll.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';
import BackTop from 'components/content/backTop/index'

import RecommandVue from './components/ReCommand.vue'
import Feature from './components/Feature.vue';

import { getHomeList,  getHomeGoods } from 'network/home'

import { HOMETYPES } from 'common/const'
// import { debounce } from 'common/utils'
import {itemListenerMixin, helloMixin} from 'common/mixn'
export default {
  name: 'homeVue',
  components: {
    NavBar,
    RecommandVue,
    Feature,
    TabControll,
    GoodsList,
    BackTop,
    ScrollVue
  },
  mixins: [itemListenerMixin, helloMixin],
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
      type: 'pop',
      showBackTop: false,
      isFixed: false,
      itemImgListener: null
    }
  },
  created () {
    this.getHomeList()
    this.getHomeGoods(this.type)
  },
  
  destroyed () {
    console.log('home destroyed')
    this.$bus.$off('itemImgLoad', this.itemImgListener)
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
          this.goods[type].page = page
        }
       })
       .catch(err => {
        console.log(err)
      })
    },
    changeTab (item) {
      this.type = item
      this.getHomeGoods(item)
    },
    backClick () {
      console.log('home backClick')
      this.$refs.scrollWrapper.scrollTo(0, 0)
    },
    contentScroll (position) {
      if (-position.y > 600) {
        this.showBackTop = true
        this.isFixed = true
      } else {
        this.showBackTop = false
        this.isFixed = false
      }
    },
    loadMore () {
      this.getHomeGoods(this.type)
    },
    refresh () {
      this.$refs.scrollWrapper.refresh()
    },
    imgLoaded () {
    }
  }
}
</script>
<style scoped>
.home-nav {
  background: var(--color-tint);
}
.tab-controll {
  /* position: sticky;
  top: 40px; */
}
.tab-controll1 {
  position: relative;
  background: #fff;
  z-index: 9999999;
}
.wrapper {
  /* height: calc(100%-94px); */
  overflow: hidden;
  /* margin-top: 44px; */
  position: absolute;
  left: 0;
  top: 44px;
  bottom: 50px;
}
</style>
