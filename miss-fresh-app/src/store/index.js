import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideList: [],
    showContent: false,
    size: 5,
    goodsList: [],
  },
  mutations: {
    getSlideList(state, list) {
      state.sideList = list;
    },
    setShowContent(state, bool) {
      state.showContent = bool;
    },
    getGoodsList(state, list) {
      state.goodsList = [...state.goodsList, ...list];
    },
  },
  actions: {
    async getSlideList({ commit }, type) {
      commit('setShowContent', false);
      const value = await api.getsidebar(type);
      commit('getSlideList', value);
      commit('setShowContent', true);
    },
    async getGoodsList({ state }, options) {
      const { type, page, sortType } = options;
      const { list } = await api.getGoodsList(type, page, state.size, sortType);
      this.commit('getGoodsList', list);
    },
  },
  modules: {},
});
