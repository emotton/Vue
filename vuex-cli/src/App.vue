<template>
  <div id="app">
    <h1>APP</h1>
    <h5>{{nome}}</h5>
  </div>
</template>

<script>
export default {
  
  name: 'App',
  components: {
    
  },
  computed: {
    nome: function(){
      return this.$store.state.nome;
    }
  }
}
</script>

