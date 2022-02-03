const state = {
  counter2: 0,
};

const mutations = {
  decrement2: (state) => state.counter2--,
  increment2: (state) => state.counter2++,
};

const getters = {
  counter2: (state) => state.counter2,
};

const actions = {
  decrement2: ({ commit }) => commit("decrement2"),
  increment2: ({ commit }) => commit("increment2"),
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
