<template>
  <div class="back-top">
    <img src="~assets/img/common/top.svg" alt=""/>
  </div>
</template>
<script>
export default {
  name: 'BackTop',
  methods: {
    
  }
}
</script>
<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
  z-index: 99999;
}
.back-top img{
  width: 20px;
  height: 20px;
}
</style>