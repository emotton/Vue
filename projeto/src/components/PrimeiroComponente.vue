<template>
  <div>
    <h1>Olá Vue !</h1>
    <p>Meu nome é {{ nome }}</p>
    <MultiplosEventos />
    <Reutilizacao />
    <Reutilizacao />
    <Reutilizacao />
  </div>
</template>

<script>
import MultiplosEventos from "./MultiplosEventos.vue";
import Reutilizacao from "./Reutilizacao.vue";

export default {
  name: "PrimeiroComponente",
  data() {
    return {
      nome: "Eduardo",
    };
  },
  components: {
    MultiplosEventos,
    Reutilizacao,
  },
};
</script>
