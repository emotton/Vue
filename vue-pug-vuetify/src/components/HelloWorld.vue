<template lang="pug">
v-container.d-flex.justify-center
  v-row
    v-col
      h1 
        | teste
      div
        ul
          li(v-for="prod in produtos") {{ prod }}
      br
      hr
      br
    v-col
      v-data-table.tabela.elevation-1(
        v-model="selected",
        :items="clientes",
        :headers="headers",
        show-select,
        :single-select="singleSelect"
      )
    v-col
      v-btn(@click="mostrar") Mostrar 
</template>>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    singleSelect: false,
    selected: [],
    produtos: ["mesa", "cadeira", "tv", "geladeira"],
    clientes: [
      { id: 1, nome: "Eduardo Motton" },
      { id: 2, nome: "Henrique Motton" },
      { id: 3, nome: "Bheatriz Motton" },
      { id: 4, nome: "Célia Maria Costa" },
      { id: 5, nome: "Pedro Carneiro" },
      { id: 6, nome: "José Dantas" },
      { id: 7, nome: "Ignácio Ferreira" },
      { id: 8, nome: "Léo Dastan" },
      { id: 9, nome: "Vitor Godofrego" },
      { id: 10, nome: "Mike Ross" },
      { id: 11, nome: "Rachel Zane" },
    ],
    headers: [
      { text: "Id", value: "id" },
      { text: "Nome", value: "nome" },
    ],
  }),
  methods: {
    mostrar() {
      this.selected.forEach((sel) => {
        console.log(sel.nome);
      });
    },
  },
};
</script>

<style scoped>
.tabela {
  width: 600px;
}
</style>