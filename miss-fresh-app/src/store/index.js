import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideList: [],
  },
  mutations: {
    getSlideList(state, list) {
      state.sideList = list;
    },
  },
  actions: {
    async getSlideList({ commit }, type) {
      const value = await api.getsidebar(type);
      commit('getSlideList', value);
    },
  },
  modules: {},
});
