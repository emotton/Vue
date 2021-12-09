import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

import Cadastro from './components/Cadastro.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/cadastro', component: Cadastro
    },
    {
      path: '/',
      redirect: '/cadastro'
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
