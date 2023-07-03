<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <TabBar/>
  </div>
</template>

<script>
import TabBar from './components/content/TabBar.vue'

export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
