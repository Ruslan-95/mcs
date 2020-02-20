import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import vuetify from './plugins/vuetify'

Vue.use(vuetify);

new Vue({
  vuetify,
  router,
  render: h => h(App),
  store
}).$mount('#app');
