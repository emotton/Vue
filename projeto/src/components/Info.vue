<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>No momento estou procurando novas oportunidades.</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <li v-for="(tec, index) in tecnologias" :key="index">
        {{ tec }}
      </li>
    </ul>
    <p>Extra</p>
    <ul>
      <li v-for="tec in tecnologias_extra" :key="tec.id">
        {{ tec.nome }}
      </li>
    </ul>
    <div>
      <button @click="showEmail">{{ msg_mostrar_email }} e-mail</button>
    </div>
    <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
    <p class="teste">
      Para acessar meu portfólio
      <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a>
    </p>
    <div>
      <p>E-mail : {{ p_email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    p_email: "",
    esta_trabalhando: false
  },
  data() {
    return {
      mostrar_email: false,
      msg_mostrar_email: "Mostrar",
      tecnologias: ["Node", "Python", "GO", "Java"],
      tecnologias_extra: [
        { id: 1, nome: "Oracle" },
        { id: 2, nome: "Postgres" },
        { id: 3, nome: "MySQL" },
      ],
      email: "emotton@gmail.com",
      meu_link: "http://www.globo.com",
    };
  },
  methods: {
    showEmail() {
      this.mostrar_email = !this.mostrar_email;
      this.msg_mostrar_email = this.mostrar_email ? "Esconder" : "Mostrar";
    },
  },
};
</script>