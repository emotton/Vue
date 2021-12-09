import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nome: "Eduardo Motton",
    valor: 0
  },
  mutations: {
    aumentar: function(state){
      state.valor++;
    }
  },
  actions: {
  },
  modules: {
  }
})
