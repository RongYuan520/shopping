<template>
  <div class="tab-controll">
    <div v-for="(item, index) in types" :key="index" class="tab-controll-item" @click="changeIndex(index,item)">
      <span :class="{ 'active': index === currentIndex}">{{item.label}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabControll',
  props: {
    types: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    changeIndex (index, item) {
      this.currentIndex = index
      this.$emit('changeTab', item.type)
    }
  }
}
</script>
<style scoped>
.tab-controll {
  display: flex;
  text-align: center;
}
.tab-controll-item {
  flex: 1;
  padding: 10px 5px;
}
.tab-controll-item span {
  padding: 5px;
}
.active {
  border-bottom: 3px solid var(--color-tint);
  color: var(--color-tint);
}
</style>