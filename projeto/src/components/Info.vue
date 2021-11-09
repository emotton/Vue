<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>No momento estou procurando novas oportunidades.</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <li v-for="tec in tecnologias" :key="tec">
        {{tec}}
      </li>
    </ul>
    <p v-show="mostrar_email">Mande uma mensagem para: {{email}}</p>
    <p>Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      esta_trabalhando: false,
      mostrar_email: true,
      tecnologias: [
        'Node', 'Python', 'GO', 'Java'
      ],
      email: 'emotton@gmail.com',
      meu_link: 'http://www.globo.com'
    }
  }
};
</script>