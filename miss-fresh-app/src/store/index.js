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
    type: null,
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
    resetGoodsList(state) {
      state.goodsList = [];
    },
    setGoodsType(state, type) {
      state.type = type;
    },
  },
  actions: {
    async getSlideList({ commit }, type) {
      commit('setShowContent', false);
      const value = await api.getsidebar(type);
      commit('getSlideList', value);
      commit('setShowContent', true);
    },
    async getGoodsList({ state, commit }, options) {
      const { page, sortType } = options;
      const type = options.type || state.type;
      const { list } = await api.getGoodsList(type, page, state.size, sortType);
      commit('getGoodsList', list);
      commit('setGoodsType', type);
    },
  },
  modules: {},
});
