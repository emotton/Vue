<template>
  <div>
    <h2>Meu Formulário</h2>
    <form @submit="enviar">
      <div>
        <input type="text" v-model="name" />
      </div>
      <div>
        <input type="text" v-model="email" />
      </div>
      <div>
          <input type="submit" value="Enviar">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Formulario",
  data() {
      return {
          name: 'Eduardo Motton',
          email: 'emotton@gmail.com'
      }
  },
  methods: {
      enviar(e){
          e.preventDefault();
          const data = {
              nome: this.name,
              email: this.email
          }
          console.log('Enviado !!!')
          console.log(data);
      }
  }
};
</script>