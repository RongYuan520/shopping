<template>
  <div class="contaner">
    <div class="lottery-box">
      <div v-for="(item, index) in list" :key="index" class="lottery">
        <div class="item" :class="{'on': index === rollIndex}">{{item.title}}</div>
      </div>
      <div class="start" @click="start1()">抽奖</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          title: '特等奖'
        },
        {
          title: '一等奖'
        },
        {
          title: '二等奖'
        },
        {
          title: '三等奖'
        },
        {
          title: '四等奖'
        },
        {
          title: '五等奖'
        },
        {
          title: '六等奖'
        },
        {
          title: '七等奖'
        }
      ],
      rollIndex: -1,//转动时命中的下标
      rolling: false,//是否正在抽奖
      cycle: 50,//至少转动多少次才能进入抽奖
      speed: 100,//初始转速
      times: 0, //转动过多少次了
      count: 8,
      prize: 0,// 获奖位置
      timer: null,
      spcial: false, // 特殊转动方案
      winner: 0,//指定改奖品获奖
    }
  },
  methods: {
    start () {
      if (!this.rolling) {
        this.startRoll()
      }
    },
    startRoll () {
      this.rolling = true
      this.times += 1
      this.oneRoll()
      // 假设当前转动次数达标且中奖位置时转动位置
      if (this.times > this.cycle && this.prize === this.rollIndex) {
        clearTimeout(this.timer)
        this.times = this.$options.data().times;
        this.speed = this.$options.data().speed;
        setTimeout(() => {
          this.rolling = false
          alert(`您中奖了：${this.list[this.rollIndex].title}`)
        }, 500)
      } else {
        if (this.times < this.cycle) {
          // 转动次数没到达最低转动次数，加速，0.9秒转完一圈
          this.speed -= 10
        } else if (this.times === this.cycle) {
          // 转动次数满足标准最少转动次数了
          if (this.spcial) {
            this.prize = this.winner
          } else {
            const index = this.random(0, this.count-1)
            this.prize = index
          }
        } else {
          this.speed += 20
        }
        if(this.speed < 40) {
          this.speed = 40
        }
        this.timer = setTimeout(this.startRoll, this.speed)
      }

    },
    // 每一次转动，获取当前转动下标
    oneRoll () {
      let index = this.rollIndex //当前转动到哪个位置
      let count = this.count //总共几个位置
      index += 1
      if (index > count -1) { //超出7，从0开始
        index = 0
      }
      this.rollIndex = index
    },
    random(min, max) {
      return parseInt(Math.random() * (max - min + 1) + min)
    },
    start1() {
      if(!this.rolling) {
        this.startRoll1()
      }
    },
    startRoll1 () {
      this.rolling = true
      this.times += 1
      this.oneRoll1()
      if(this.times > this.cycle && this.prize === this.rollIndex) {
        clearTimeout(this.timer)
        this.times = this.$options.data().times
        setTimeout(() => {
          this.rolling = false
          alert(`winner: ${this.list[this.rollIndex].title}`)
        }, 500)
      } else {
        if (this.spcial) {
          this.prize = this.winner
        } else {
          const index = this.random(0, this.count -1)
          this.prize = index
        }
        this.timer = setTimeout(this.startRoll1, this.speed)
      }
    },
    oneRoll1 () {
      let index = this.rollIndex
      index += 1
      if (index > this.count -1) {
        index = 0
      }
      this.rollIndex = index
    }
  }
}
</script>
<style scoped lang="scss">
$lottery_w: 5rem;
$lottery_h: 5rem;
$lottery-margin: 0.2rem;
.lottery-box {
  width: $lottery_w * 3;
  height: $lottery_h *3;
  position: relative;
  .start {
    width: $lottery_w - 2 * $lottery-margin;
    height: $lottery_h - 2 * $lottery-margin;
    position: absolute;
    left: $lottery_w + $lottery-margin;
    top: $lottery_h + $lottery-margin;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lottery {
    width: $lottery_w;
    height: $lottery_h;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    box-sizing: border-box;
    padding: $lottery-margin;
    display: flex;
    justify-content: center;
    align-items: center;
    .item {
      width: 100%;
      height: 100%;
      border: 1px solid black;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .item.on {
      background: green;
    }
  }
  .lottery:nth-child(1) {
    top:0;
    left: 0 * $lottery_w
  }
  .lottery:nth-child(2) {
    top:0;
    left: 1 * $lottery_w
  }
  .lottery:nth-child(3) {
    top:0;
    left: 2 * $lottery_w
  }
  .lottery:nth-child(4) {
    top:1 * $lottery_h;
    left: 2 * $lottery_w;
  }
  .lottery:nth-child(5) {
    top:2 * $lottery_h;
    left: 2 * $lottery_w;
  }
  .lottery:nth-child(6) {
    top:2 * $lottery_h;
    left: 1 * $lottery_w;
  }
  .lottery:nth-child(7) {
    top:2 * $lottery_h;
    left: 0 * $lottery_w
  }
  .lottery:nth-child(8) {
    top:1 * $lottery_h;
    left: 0 * $lottery_w;
  }
}

</style>