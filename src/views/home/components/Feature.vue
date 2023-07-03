<template>
  <div class="feature">
    <a href="https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg">
      <img src="https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg" alt="" @load="imgLoaded"/>
    </a>
  </div>
</template>
<script>
export default {
  name: 'featureVue',
  props: {

  },
  data () {
    return {
      isLoad: false
    }
  },
  methods: {
    imgLoaded () {
      // 只一次
      if (!this.isLoad) {
        this.$emit('imgLoaded')
        this.isLoad = true
      }
    }
  }
}
</script>
<style scoped>
.feature img{
  width: 100%;
}
</style>