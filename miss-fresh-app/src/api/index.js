import axios from 'axios';
import baseURL, { URLs } from './URLS';

const appkey = 'web_wj_1610679018617';
const request = axios.create({
  baseURL,
  params: {
    appkey,
  },
});

request.interceptors.response.use((value) => value.data);

// 获取二级导航
const getsidebar = (type) => request.get(URLs.getsidebar, { params: { type } });

// 获取相应条件的商品卡片
const getGoodsList = (type, page, size, sort) => request.get(URLs.getGoodslist, {
  params: {
    type,
    page,
    size,
    sort,
  },
});

// 模糊查询
const likeSearch = (value) => request.get(URLs.likeSearch, { params: { likeValue: value } });

// 搜索功能
const search = (type, page, size) => request.get(URLs.search, {
  params: {
    type,
    page,
    size,
  },
});

export default {
  getsidebar,
  getGoodsList,
  likeSearch,
  search,
};
