// 获取商品列表的接口
import axios from '@/axios';

export default {
  table(params) {
    return axios.get('/products/all', { params });
  },
  remove(params) {
    return axios.delete(`/products/${params.id}`);
  },
  add(params) {
    return axios.post('/products/add', params);
  },
  getData(id) {
    return axios.get(`/products/${id}`);
  },
  updata(params) {
    return axios.put('/products/edit', params);
  },
};
