<template>
  <div class="menu-list">
    <a-menu
      :default-selected-keys="[defaultSelect]"
      :default-open-keys="[defaultOpen]"
      mode="inline"
      theme="dark"
      :inline-collapsed="$store.state.collapsed"
    >
      <a-sub-menu v-for="item in $store.state.menuRoutes" :key="item.name">
        <span slot="title">
          <a-icon :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </span>
        <template v-for="child in item.children">
          <a-menu-item  v-if='!child.meta.hidden' :key="child.name">
          <router-link :to="{ name: child.name }">
            <a-icon :type="child.meta.icon" />
            {{ child.meta.title }}
          </router-link>
        </a-menu-item>
        </template>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<style lang="less">
.menu-list {
  width: 200px;
  position: fixed;
  height: 100%;
  .ant-menu {
    height: 100%;
  }
}
</style>

<script>
export default {
  computed: {
    defaultSelect() {
      return this.$router.history.current.matched[0] ? this.$router.history.current.matched[0].name : '';
    },
    defaultOpen() {
      return this.$router.history.current.matched[1] ? this.$router.history.current.matched[1].name : '';
    },
  },
};
</script>
