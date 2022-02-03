import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  });

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    decrement: (state) => state.counter--,
    increment: (state) => state.counter++,
  },
  getters: {
    counter: (state) => state.counter,
  },
  actions: {
    decrement: ({ commit }) => commit("decrement"),
    increment: ({ commit }) => commit("increment"),
  },
  plugins: [vuexLocal.plugin]
});

export { store };
