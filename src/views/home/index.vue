<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="pre"></div>
      <div slot="content">首页</div>
      <div slot="after"></div>
    </nav-bar>
    <h2>home</h2>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import { getHomeList } from 'network/home'
export default {
  name: 'homeVue',
  components: {
    NavBar
  },
  data () {
    return {
      recommend: [],
      banners: []
    }
  },
  created () {
    getHomeList()
       .then(res => {
        if (res.success) {
          this.result = res.data
          const {recommend: {list}, banner: {list: list1}} = res.data
          this.recommend = list
          this.banners = list1
          console.log('list', list, list1)
        }
       })
       .catch(err => {
        console.log(err)
      })
  }
}
</script>
<style>
.home-nav {
  background: var(--color-tint);
}
</style>
