/*
 * @Author: hiddenSharp429 z404878860@163.com
 * @Date: 2023-03-26 20:58:46
 * @LastEditors: hiddenSharp429 z404878860@163.com
 * @LastEditTime: 2023-06-22 16:41:44
 * @FilePath: \app\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: resolve => require(['../views/index.vue'], resolve),
  },
  {
    path: "/room",
    name: "index",
    component: resolve => require(['../views/room.vue'], resolve),
  },
  {
    path: '/fust',
    name: 'fust',
    component: resolve => require(['../views/fust.vue'], resolve),
  },
  {
    path: '/demo',
    name: 'demo',
    component: resolve => require(['../views/demo.vue'], resolve),
  },
  {
    path: '/show/spring/1',
    name: "show1",
    component: resolve => require(['../components/spring1/HelloWorld'], resolve),
  },
  {
    path: '/show/spring/2',
    name: "show2",
    component: resolve => require(['../components/spring2/HelloWorld'], resolve),
  },
  {
    path: '/show/spring/3',
    name: "show3",
    component: resolve => require(['../components/spring3/HelloWorld'], resolve),
  },
  {
    path: '/show/summer/1',
    name: "show4",
    component: resolve => require(['../components/summer1/HelloWorld'], resolve),
  },
  {
    path: '/show/summer/2',
    name: "show5",
    component: resolve => require(['../components/summer2/HelloWorld'], resolve),
  },
  {
    path: '/show/summer/3',
    name: "show6",
    component: resolve => require(['../components/summer3/HelloWorld'], resolve),
  },
  {
    path: '/show/autumn/1',
    name: "show7",
    component: resolve => require(['../components/autumn1/HelloWorld'], resolve),
  },
  {
    path: '/show/autumn/2',
    name: "show8",
    component: resolve => require(['../components/autumn2/HelloWorld'], resolve),
  },
  {
    path: '/show/autumn/3',
    name: "show9",
    component: resolve => require(['../components/autumn3/HelloWorld'], resolve),
  },
  {
    path: '/show/winter/1',
    name: "show10",
    component: resolve => require(['../components/winter1/HelloWorld'], resolve),
  },
  {
    path: '/show/winter/2',
    name: "show11",
    component: resolve => require(['../components/winter2/HelloWorld'], resolve),
  },
  {
    path: '/show/winter/3',
    name: "show12",
    component: resolve => require(['../components/winter3/HelloWorld'], resolve),
  },
  {
    path: '/reel',
    name: 'reel',
    component: resolve => require(['../views/reel.vue'], resolve)
  }
];

const router = new VueRouter({
  routes,
});

export default router;
