import Vue from 'vue'
import App from './App.vue'
import VueRouter from  'vue-router'

import Main from './components/Main.vue'
import About from './components/About.vue'
import Faq from './components/Faq.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', components: Main },
    { path: '/about', components: About },
    { path: '/faq', components: Faq },
  ]
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app');
