<template>
  <div class="home" key="key">
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
  data() {
    return {
      key: 0,
    };
  },
  watch: {
    $route() {
      console.log(this.key);
      this.key += 1;
    },
  },
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
