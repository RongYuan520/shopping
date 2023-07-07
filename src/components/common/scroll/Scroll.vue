<template>
  <div :class="rootclass" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'ScrollVue',
  data () {
    return {
      scroll: null
    }
  },
  props: {
    rootclass: {
      type: String,
      default: 'wrapper'
    },
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // 公共组件，但是页面总有多个'class=wrapper',用querySelecter会不准确，用ref代替
    // const wrapper = document.querySelector('.wrapper')
    const wrapper = this.$refs.scroll
    this.scroll = new BetterScroll(wrapper, {
      scrollY: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad

    })
    this.scroll.scrollTo(0, 0)
    // 监听滚动
    this.scroll.on('scroll', position => {
      this.$emit('scroll', position)
    })
    if (this.pullUpLoad) {
        // 监听上拉加载更多
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
          this.finishPullUp()
        })
    }

  },
  methods: {
    scrollTo (x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp()
    }
  }
}
</script>
<style scoped>
.content {
  /* height: 3000px; */
}
</style>