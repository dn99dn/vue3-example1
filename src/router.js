import Vue from 'vue';
// import VueRouter from 'vue-router';
import { createRouter, createWebHistory } from "vue-router";

import Home from './views/Home.vue';
import About from './views/About.vue';

// Vue.use(VueRouter);

// const router = new VueRouter({
//   mode: 'history',
const router = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
  ]
});

export {router}