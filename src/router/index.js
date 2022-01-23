import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "../views/login/login";
import home from "../views/home/home";
import test from "../views/test/test";
import main from "../views/main";

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/",
    name: "main",
    component: main,
    children:[
      {
        path: "/home",
        name: "home",
        component: home
      },
      {
        path: "/test",
        name: "test",
        component: test
      }
  ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
