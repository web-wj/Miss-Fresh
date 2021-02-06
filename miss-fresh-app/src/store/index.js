import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    slideList: [],
  },
  mutations: {
    getSlideList(state, list) {
      state.slideList = list;
    },
  },
  actions: {
    async getSlideList({ commit }, type) {
      const value = await api.getsidebar(type);
      commit('getSlideList', value);
      console.log(value);
    },
  },
  modules: {},
});
