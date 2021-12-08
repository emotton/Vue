<template>
  <div id="app">
    <h1>APP</h1>
    <app-componente :valor1="nome"></app-componente>
    <app-componente></app-componente>
    <comp-pai />
  </div>
</template>

<script>
import componente from './components/Componente.vue';
import CompPai from './components/CompPai.vue';
export default {
  name: "App",
  data: function () {
    return {
      nome: "Eduardo Motton",
    };
  },
  components: {
    "app-componente": componente,
    CompPai
  },
};
</script>
