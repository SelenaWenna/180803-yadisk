import Vue from 'vue';
import Router from 'vue-router';

//-import Home from '../components/Home';
import List from '../components/List';
import Token from '../components/Token';

const pathToRegexp = require('path-to-regexp');

Vue.use(Router);

//var keys = [{pattern: '/^\/?\/([^\/]+?)\/?$/i'}];
//var re = pathToRegexp('/:diskPath?', keys);
//console.log(re)
//re = /^\/:diskPath?\/([^\/]+?)\/?$/i;
// keys = [{ name: 'bar', prefix: '/', delimiter: '/', optional: false, repeat: false, pattern: '[^\\/]+?' }]

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/*',
      name: 'home',
      component: List,
/*      children: [
        {
          path: ':diskPath',
          name: 'list',
          component: List,
        },
      ],
*/    },
    {
      path: '/settings',
      name: 'settings',
      component: Token
    },
  ]
})
