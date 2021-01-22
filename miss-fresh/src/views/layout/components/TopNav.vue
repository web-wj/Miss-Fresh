<template>
  <div class="silder-nav">
    <a-button type="primary" @click="toggleCollapsed">
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb v-if="currentRouter.length > 1">
        <a-breadcrumb-item>{{ currentRouter[0].meta.title }}</a-breadcrumb-item>
        <a-breadcrumb-item>
          <router-link :to="{ name: currentRouter[1].name }">
            {{ currentRouter[1].meta.title }}</router-link
          >
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li class="user-name">
        欢迎：{{ $store.state.user.username }}
        <a-icon type="down" />
      </li>
      <li class="login-out" @click="logout">退出</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentRouter: this.$router.history.current.matched,
    };
  },
  watch: {
    $route() {
      this.currentRouter = this.$router.history.current.matched;
    },
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
    logout() {
      this.$store.dispatch('logout');
      this.$router.push({
        name: 'Login',
      });
    },
  },
};
</script>
