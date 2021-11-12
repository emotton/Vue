<template>
  <div>
    <h1>Múltiplos Eventos</h1>
    <button @click="primeiro('edu'), segundo('zera')">Ativar múltiplos eventos</button>
    <p>{{ multiplos_eventos }}</p>
  </div>
</template>

<script>
export default {
  name: "MultiplosEventos",
  data() {
    return {
      multiplos_eventos: "",
    };
  },
  methods: {
    primeiro(txt) {
      this.multiplos_eventos = `Primeiro evento ativado: ${txt}`;
    },
    segundo(txt) {
      setTimeout(() => {
        this.multiplos_eventos = `Segundo evento ativado: ${txt}`;
      }, 3000);
    },
  },
};
</script>

<style scoped>
div {
  margin: 100px;
}
</style>