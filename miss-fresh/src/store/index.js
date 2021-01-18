import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false,
  },
  mutations: {
    collapsedChange(state) {
      state.collapsed = !state.collapsed;
    },
  },
  actions: {
    collapsedActions(context) {
      context.commit('collapsedChange');
    },
  },
  modules: {},
});
