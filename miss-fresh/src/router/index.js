import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/Login.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/login',
  name: 'Login',
  component: Login,
}, {
  path: '/',
  name: 'Home',
  component: Home,
  children: [],
},

];

const router = new VueRouter({
  routes,
});

export default router;
