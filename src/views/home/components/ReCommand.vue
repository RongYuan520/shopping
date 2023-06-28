<template>
  <div class="recommand">
    <div v-for="(item,index) in recommands" :key="index" class="recomand-item">
      <a :href="item.image">
        <img :src="item.image"/>
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'recommandVue',
  props: {
    recommands: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style scoped>
.recommand {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 15px 0;
  border-bottom: 8px solid #ccc;
}
.recomand-item {
    flex: 1;
}
.recomand-item img {
  width: 60px;
  height: 60px;
}
</style>