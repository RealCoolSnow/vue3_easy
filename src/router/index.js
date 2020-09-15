/*
 * @Description:
 * @Author: CoolSnow (coolsnow2020@gmail.com)
 * @Date: 2020-09-14 16:19:45
 * @LastEditors: CoolSnow
 * @LastEditTime: 2020-09-15 12:25:18
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/home/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/about/index.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
