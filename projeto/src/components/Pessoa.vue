<template>
  <div>
    <h2>Esta é a descrição da pessoa : {{ nome }}</h2>
    <Info :p_email="email" :esta_trabalhando="esta_trabalhando"/>
    <Picture />
  </div>
</template>

<script>
import Info from './Info.vue';
import Picture from './Picture.vue';

export default {
  name: "Pessoa",
  data() {
    return {
      nome: "Eduardo",
      email: "emotton2@gmail.com",
      esta_trabalhando: true
    };
  },
  components: {
      Info,
      Picture
  }
};
</script>