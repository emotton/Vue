<template>
  <div class="app">
    <div>
      <h1>Listagem</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th align="center">Ações</th>
          </tr>
          <tr>
            <th colspan="3">
              <hr />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="api in apis" :key="api.id">
            <td width="100">{{ api.id }}</td>
            <td width="400">{{ api.nome }}</td>
            <td>
              <button @click="editarAPI(api.id)">Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Listagem",
  computed: {
    ...mapState("api", ["apis"]),
    ...mapGetters("api", ["apis"]),
  },
  methods: {
    editarAPI(id) {
      this.$store.dispatch("api/EDITAR_API", id);
      this.$router.push("cadastro");
    },
  },
};
</script>

<style scoped>
.app {
  display: flex;
  justify-content: center;
}
</style>