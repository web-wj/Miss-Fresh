<template>
  <div class="home">
    <left-menu/>
    <div :class="{'main-app': true, 'extend-app': $store.state.collapsed}">
      <topNav />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import leftMenu from './components/LeftMenu.vue';
import topNav from './components/TopNav.vue';

export default {
  components: {
    leftMenu,
    topNav,
  },
  methods: {

  },
};
</script>

<style lang="less">
@import url("../../assets/css/home.less");
</style>
