<template>
  <div v-if="Object.keys(info).length" class="base-info">
    <div class="info-img">
      <div class="info-img-item" v-for="item in info.topImages" :key="item">
        <img :src="item" alt=""/>
      </div>
    </div>
    <div class="info-title">{{info.desc}}</div>

    <div class="info-price">
      <span class="n-price">{{info.newPrice}}</span>
      <span class="o-price"><s>{{info.oldPrice}}</s></span>
      <span class="dosccount" v-if="info.discount">{{info.discount}}</span>
    </div>

    <div class="info-other">
      <span>{{info.columns[0]}}</span>
      <span>{{info.columns[1]}}</span>
      <span>{{info.services[info.services.length - 1].name}}</span>
    </div>

    <div class="info-service">
      <span class="info-service-item" v-for="(item,index) in info.services" :key="index">
        <img :src="item.icon" alt=""/>
        <span>{{item.name}}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    info: {
      handler: function() {
      },
      immediate: true
    }
  },
  mounted () {
    console.log('child mounted')
  }
}
</script>
<style scoped>
.base-info {
  padding: 10px;
  background: green;
}
.info-img {
  display: flex;
}
.info-img-item {
  flex: 1;
  text-align: center;
}
.info-img-item img {
  width: 20px;
  height: 20px;
}
.info-other {
  display: flex;
  font-size: 12px;
    color: #333;
}
.info-other span{
  flex: 1;
  text-align: center;
}

.n-price {
  font-size: 16px;
  font-weight: bold;
  color: var(--color-high-text);
  margin-right: 10px;
}
.info-service-item {
  margin-right: 15px;
}
.info-service-item img{
  width: 15px;
  height: 15px;
  line-height: 14px;
}
</style>