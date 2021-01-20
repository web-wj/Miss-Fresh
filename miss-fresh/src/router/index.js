import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/Login.vue';
import getMenuRoutes from '../utils/permission';

Vue.use(VueRouter);

const asyncRouters = [{
  path: '/production',
  name: 'Production',
  meta: {
    title: '商品',
  },
  component: Home,
  children: [{
    path: 'prolist',
    name: 'Prolist',
    meta: {
      title: '商品列表',
    },
    component: () => import('../views/pages/ProList.vue'),
  }, {
    path: 'proadd',
    name: 'Proadd',
    meta: {
      title: '添加商品',
    },
    component: () => import('../views/pages/ProAdd.vue'),

  }, {
    path: 'classmanage',
    name: 'Classmanage',
    meta: {
      title: '类目管理',
    },
    component: () => import('../views/pages/ClassManage.vue'),
  }],
}];

const routes = [{
  path: '/',
  name: 'Home',
  meta: {
    title: '首页',
  },
  component: Home,
  children: [{
    path: 'index',
    name: 'Index',
    meta: {
      title: '统计',
    },
    component: () => import('../views/pages/Index.vue'),
  }],
},
{
  path: '/login',
  name: 'Login',
  component: Login,
},
];

const router = new VueRouter({
  routes,
});

let isFirstLogin = false;
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    // 表示已经登录过了！
    if (store.state.user.appkey) {
      // 处理路由
      if (!isFirstLogin) {
        const resRoutes = getMenuRoutes(asyncRouters, store.state.user.role);
        router.addRoutes(resRoutes);
        store.dispatch('changeMenu', routes.concat(resRoutes).filter((item) => item.name !== 'Login'));
        isFirstLogin = true;
      }
      return next();
    }
    return next({
      name: 'Login',
    });
  }
  return next();
});
export default router;
