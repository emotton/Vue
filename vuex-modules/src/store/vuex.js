import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import api from "./modules/api";
import contador from "./modules/contador";
import contador2 from "./modules/contador2";

const vuexLocalStorage = new VuexPersist({
  key: "gr1d",
  storage: window.localStorage,
  modules: ['contador', 'contador2', 'api'],
});

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules: {
    api,
    contador,
    contador2,
  },
  plugins: [vuexLocalStorage.plugin],
});

export { store };
