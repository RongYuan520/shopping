<template>
  <div class="sum-tab">
    <div class="check item">
      <form>
        <label><input name="Fruit" type="radio" value="" />全选 </label> 
      </form>
      总价：¥{{totalPrice}}
    </div>
    <div class="button item">
      <button @click="jiesuan">去结算</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'sumTab',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      checked: false
    }
  },
  computed: {
    ...mapGetters(['totalPrice'])
  },
  methods: {
    jiesuan () {
      this.$toast.show('请选择商品')
    }
  }
}
</script>
<style scoped>
.sum-tab {
  bottom: 49px;
  position: fixed;
  height: 49px;
  display: flex;
  width: 100%;
}
.item {
  flex: 1;
}
.button button{
  background: var(--color-tint);
  width: 100%;
  height: 100%;
  border: none;
}
</style>