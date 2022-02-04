<template>
    <div>
        <h1>Cadastro - Editar</h1>
        <form>
            <div>
                <label>#</label>
                <span>{{apiEdited}}</span>
            </div>
            <div>
                <label>Nome</label>
                <input type="text" :value="apiById.nome" />
            </div>
            <div>
                <button>Gravar</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "CadastroEditar",
  computed: {
    ...mapState("api", ["apis"]),
    ...mapGetters("api", ["apis", "apiEdited", "apiById"]),
  }
};
</script>
