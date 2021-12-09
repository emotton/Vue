<template>
  <div>
    <h1>Login</h1>
    <input type="text" v-model="usuario" />
    <button @click="logar">Logar</button>
    <button @click="logado">logado?</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      usuario: "",
    };
  },
  methods: {
    logar() {
      this.$session.set("username", this.usuario);
    },
    logado(){
      console.log(this.$session.exists("username"));
    },
    logout(){
      this.$session.remove("username");
      this.usuario = "";
    }
  },
  mounted() {
    this.usuario = this.$session.get("username");
  },
};
</script>
