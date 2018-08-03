import Vue from 'vue';
import Router from 'vue-router';

//-import Home from '../components/Home';
import List from '../components/List';
import Token from '../components/Token';

const pathToRegexp = require('path-to-regexp');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/disk/',
    },
    {
      path: '/disk/*',
      name: 'disk',
      component: List
    },
    {
      path: '/settings',
      name: 'settings',
      component: Token
    },
  ]
})
