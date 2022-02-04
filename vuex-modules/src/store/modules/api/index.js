const state = {
  apiForEdit: 0,
  apis: [
    {
      id: 1,
      nome: "Eduardo Motton"
    },
    {
      id: 2,
      nome: "João Lima"
    },
    {
      id: 3,
      nome: "Nathan"
    },
    {
      id: 4,
      nome: "Henrique Motton"
    },
    {
      id: 5,
      nome: "Ali Mohamed"
    }
  ]
};

const mutations = {
  setApiForEdit (state, value){
    state.apiForEdit = value;
},
};

const getters = {
  apiEdited: (state) => state.apiForEdit,
  apis: (state) => state.apis,
  apiById: (state) => {
    return state.apis.find(api => api.id === state.apiForEdit);
  } 
};

const actions = {
  EDITAR_API: function ({ commit }, id) {
    commit("setApiForEdit", id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
