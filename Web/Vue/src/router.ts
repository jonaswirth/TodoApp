import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from './components/Index.vue';
import Edit from './components/Edit.vue';
import Add from './components/Add.vue';

Vue.use(VueRouter);

const routes = [
  {path:'/', component:Index},
  {path:'/add', component:Add},
  {path:'/edit/:id', component: Edit},
  {path:'*', redirect: '/'}
];

export default new VueRouter({
  routes,
  mode: 'history'
});
