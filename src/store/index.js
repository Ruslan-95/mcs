import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import API_URL from "../const";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: '',
    users: []
  },
  getters: {
    getUsers(state) {
      return state.users
    },

    getData(state) {
      return state.users
    }
  },
  mutations: {
    set(state, {name, value}) {
      state[name] = value
    }

  },
  actions: {
    getUsers({state, commit}) {
      if(state.users.length === 0) {
        return axios.get(API_URL + "?results=10")
          .then(res => {
            console.log(state);
            commit('set', {name: 'users', value: res.data.results})
          })
          .catch(err => console.log(err))
      }
    }
  }
});
