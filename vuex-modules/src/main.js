import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import { store } from './store/vuex';

import CounterTest from './components/CounterTest';
import Listagem from './components/Listagem';
import CadastroEditar from './components/Cadastro';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/listagem', component: Listagem
    },
    {
      path: '/cadastro', component: CadastroEditar
    },
    {
      path: '/', component: CounterTest
    }
  ]
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
