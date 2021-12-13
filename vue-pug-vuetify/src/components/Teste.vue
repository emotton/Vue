<template>
  <v-container class="d-flex align-center justify-center">
        <v-data-table class="tabela"
            :headers="headers"
            :items="clientes"
            show-select :single-select="singleSelect"
            v-model="selected"
        >
          <template v-slot:items="props">
            <td>{{ props.item.nome }}</td>
          </template>
        </v-data-table>
        <v-btn @click="mostrar">Mostrar</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'Teste',

    data: () => ({
     singleSelect: false,
     selected: [],
     produtos: ['mesa', 'cadeira', 'tv', 'geladeira', 'frigideira'],
     clientes: [
       { id: 1, nome: 'Eduardo Motton'},
       { id: 2, nome: 'Henrique Motton'},
       { id: 3, nome: 'Bheatriz Motton'},
       { id: 4, nome: 'Célia Maria Costa'},
       { id: 5, nome: 'Pedro Carneiro'},
       { id: 6, nome: 'José Dantas'},
       { id: 7, nome: 'Ignácio Ferreira'},
       { id: 8, nome: 'Léo Dastan'},
       { id: 9, nome: 'Vitor Godofrego'},
       { id: 10, nome: 'Mike Ross'},
       { id: 11, nome: 'Rachel Zane'}
     ],
     headers: [
         { text: 'Id', value: 'id' },
         { text: 'Nome', value: 'nome', sortable: false },
     ]
    }),
    methods: {
        mostrar(){
            this.selected.forEach(sel => {
                console.log(sel.nome);
            });
        }
    },
  }
</script>

<style scoped>
.tabela{
    width: 600px;
}
</style>