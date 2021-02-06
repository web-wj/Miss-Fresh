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

export default {
  getsidebar,
};
