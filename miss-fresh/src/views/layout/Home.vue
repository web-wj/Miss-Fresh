<template>
  <div class="home">
    <left-menu />
    <div :class="{ 'main-app': true, 'menu-unfold': collapsed }">
     <top-header />
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
      collapsed: false,
    };
  },
  components: {
    leftMenu,
    topHeader,
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
