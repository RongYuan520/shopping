<template>
  <div>
    <nav-bar>
      <div slot="pre" @click="back"><img class="imgBack" src="~assets/img/common/back.svg"/></div>
      <div slot="content" class="title">
        <div class="title-item" v-for="(item, index) in DETAILTITLES" :key="index" :class="{active: currentIndex === index}" @click="getTitleIndex(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import { DETAILTITLES } from 'common/const'
export default {
  name: 'detailVue',
  data () {
    return {
      DETAILTITLES,
      currentIndex: 0,
    }
  },
  components: {
    NavBar
  },
  computed: {

  },
  methods: {
    getTitleIndex (index) {
      this.currentIndex = index
      this.$emit('titieClick', index)
    },
    back () {
      history.back()
    }
  }
}
</script>
<style scoped>
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
