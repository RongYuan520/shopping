<template>
  <div class="nav-bar">
    <div class="pre">
      <slot name="pre"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="after">
      <slot name="after"></slot>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    
  },
}
</script>
<style scoped>
.nav-bar {
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
}
.pre,.after{
  width: 60px;
}
.content {
  flex: 1;
}
</style>