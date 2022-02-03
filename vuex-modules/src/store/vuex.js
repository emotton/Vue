import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist';

import contador from './modules/contador';
import contador2 from './modules/contador2';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  });

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules: {
    contador,
    contador2
  },
  plugins: [vuexLocal.plugin]
});

export { store };
