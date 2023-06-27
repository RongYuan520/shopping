<template>
  <div class="tab-bar-item" @click="goto(type)">
    <slot name="img"></slot>
    <div :class="{'activeLabel': isActive}"><slot name="label"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props: {
    type: {
      type: String,
      default: 'home'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isActive: {
      get: function () {
        return this.$route.path.indexOf(this.type) !== -1
      }
    }
  },
  methods: {
    goto (type) {
      this.$router.push({
        path: `/${type}`
      }).catch(err => {
        console.log(err, '$router err')
      })
    }
  }
}
</script>
<style>
.tab-bar-item {
    flex: 1;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
  .activeLabel {
    color: red;
  }
</style>