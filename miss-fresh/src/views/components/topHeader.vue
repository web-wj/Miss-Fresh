<template>
     <div class="main-header">
        <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
          <a-icon :type="$store.state.collapsed? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <div class="breadcrumb">
          <a-breadcrumb>
            <a-breadcrumb-item><a href="">首页</a></a-breadcrumb-item>
            <a-breadcrumb-item>统计</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <ul class="user-info">
          <li>欢迎：wj<a-icon type="down" /></li>
          <li>退出</li>
        </ul>
      </div>
</template>

<script>
export default {
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('collapsedActions');
    },
  },
};
</script>
