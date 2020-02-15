import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from "./views/About";
import Faq from "./views/Faq";
import UserId from "./views/UserId";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/id:id',
      name: 'id',
      component: UserId
    }
  ]
})
