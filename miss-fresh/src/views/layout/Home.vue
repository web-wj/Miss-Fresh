<template>
  <div class="home">
    <left-menu />
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
     <top-header />
     <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less">
@import url("~@/assets/css/home.less");
</style>

<script>
import leftMenu from '../components/leftMenu.vue';
import topHeader from '../components/topHeader.vue';

export default {
  data() {
    return {

    };
  },
  components: {
    leftMenu,
    topHeader,
  },

};
</script>
