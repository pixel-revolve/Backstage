import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "../views/login/login";
import home from "../views/home/home";
import test from "../views/test/test";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/home",
    name: "home",
    component: home,
    children:[
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
