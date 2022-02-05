<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <input type="text" v-model="nome" />
    </div>
        <div>
      <input type="text" v-model="pessoa.nome" />
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ComputedPlus',
  props: {
    msg: String
  },
  data() {
    return {
      pessoa: {
        nome: ''
      }
    }
  },
  computed: {
    nome: {
      get(){
        return this.pessoa.nome
      }, 
      set(newValue){
        this.pessoa.nome = newValue;
        console.log("Colocar no VUEX", newValue);
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
