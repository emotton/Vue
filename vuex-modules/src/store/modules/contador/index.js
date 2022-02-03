const state = {
  counter: 0,
};

const mutations = {
  decrement: (state) => state.counter--,
  increment: (state) => state.counter++,
};

const getters = {
  counter: (state) => state.counter,
};

const actions = {
  decrement: ({ commit }) => commit("decrement"),
  increment: ({ commit }) => commit("increment"),
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
