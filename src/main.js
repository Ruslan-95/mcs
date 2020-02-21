import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.use(Vuetify);

new Vue({
  vuetify: new Vuetify(),
  router,
  render: h => h(App),
  store
}).$mount('#app');
