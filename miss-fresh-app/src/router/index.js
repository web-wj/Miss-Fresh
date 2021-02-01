import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Classify from '../views/Classify.vue';
import Shopping from '../views/Shopping.vue';
import MyIfo from '../views/MyIfo.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/home',
  component: Home,
  children: [{
    path: 'classify',
    component: Classify,
  },
  {
    path: 'shopping',
    component: Shopping,
  },
  {
    path: 'my',
    component: MyIfo,
  },
  ],
},
{
  path: '*',
  redirect: '/home',
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
