<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    const couterMap = JSON.parse(localStorage.getItem('goods')) || {};
    this.$store.commit('setCounterMap', couterMap);
  },
};
</script>

<style lang="less">

</style>
