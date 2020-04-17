import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    address: null
  },
  mutations: {
    setAddress (state, address) {
      state.address = address
    },
    clearAddress (state) {
      state.address = null
    },
  }
});

export default store;
