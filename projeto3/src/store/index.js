import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    contador: 0
  },
  mutations: {
    increment (state) {
      state.contador++
    },
    decrement (state) {
      state.contador--
    }
  },
  getters: {
    contador: state => {
      return state.contador;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
