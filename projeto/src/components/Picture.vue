<template>
  <div>
    <img :src="avatar" :alt="descricao" />
    <MudarImagem @mudar-imagem="trocarImagem" />
  </div>
</template>

<script>
import MudarImagem from "./MudaImagem.vue";

export default {
  name: "Picture",
  data() {
    return {
      avatar: "highlander.jpeg",
      descricao: "Highlander",
    };
  },
  components: {
    MudarImagem,
  },
  methods: {
      trocarImagem(){
          this.avatar = "highlander2.jpeg"
      }
  }
};
</script>