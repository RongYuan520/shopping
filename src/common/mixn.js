import { debounce } from "./utils"
import BackTop from 'components/content/backTop'
export const itemListenerMixin = {
  mounted () {
    // 图片加载完的事件监听
    const refresh = debounce(this.$refs.scrollWrapper.refresh, 1000)
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)

    // 获取TabControld的offsetTop
    // 确定滑动到多少，有吸顶效果，获取tabControll的offsetTop
    // mouted中获取不行，因为上边图片异步返回
    // 依赖上方滑动区域返回的图片高度，图片加载完只返回一次就行了
  },
  methods: {
    hello () {
      console.log('hello')
    },
    debounce
  },
}

export const helloMixin = {
  data () {
    return {
      hello1: 'hello111'
    }
  }
}

export const BackTopMixin = {
  data () {
    return {
      showBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick () {
      this.$refs.scroll.scrollTo(0, 0, 300)
    }
  }
}