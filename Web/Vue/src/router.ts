import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

Vue.use(VueRouter);

const routes = [
  {path:'/', component:App},
  {path:'*', redirect: '/'}
];

export default new VueRouter({
  routes,
  mode: 'history'
});
