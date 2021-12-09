<template>
  <div id="app">
    <h1>APP</h1>
    <h5>{{nome}}</h5>
    <div>
      {{valor}}
    </div>
    <button @click="aumentar">Aumentar</button>
  </div>
</template>

<script>
export default {
  
  name: 'App',
  components: {
    
  },
  methods: {
    aumentar: function(){
      this.$store.commit('aumentar');
    }
  },
  computed: {
    nome: function(){
      return this.$store.state.nome;
    },
    valor: function(){
      return this.$store.state.valor;
    }
  }
}
</script>

