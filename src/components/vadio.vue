<template>
  <div>
    <div @click="openDia">打开弹窗11111</div>
    <el-dialog
      title="提示"
      :visible.sync="visible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleClose">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: Number,
      default: 15
    }
  },
  data () {
    return {
      visible: false,
      times: 0,
      timer: null
    }
  },
  methods: {
    openDia () {
      this.visible = true
      if (this.timer) clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.times += 1
        console.log('this.times', this.times)
      }, 1000)
    },
    handleClose () {
      this.visible = false
      clearInterval(this.timer)
      this.getLotterry()
      this.times = this.$options.data().times
    },
    getLotterry () {
      const count = Math.floor(this.times/this.size)
      alert(`u got ${count}个红包`)
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  width: 200px;
  height: 200px;
}
</style>