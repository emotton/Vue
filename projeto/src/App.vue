<template>
  <div>
    <Header :esta_logado="true"/>
    <PrimeiroComponente />
    <LifeCycle />
    <Pessoa />
    <Formulario />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import LifeCycle from './components/LifeCycle.vue';
import Pessoa from './components/Pessoa.vue';
import Formulario from './components/Formulario.vue';

export default {
    name: 'App',
    components: {
      Header,
      PrimeiroComponente,
      LifeCycle,
      Pessoa,
      Formulario
    }
}
</script>

<style>
body {
  background-color: #333;
  color: #ffffff;
}
a {
  color: red;
}

.teste {
  background-color: black;
}
</style>