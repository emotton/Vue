<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <input type="text" v-model="nome" />
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'WatchProperty',
  props: {
    msg: String
  },
  data() {
    return {
      nome: "Eduardo Motton"
    }
  },
  watch: {
    nome(newValue, oldValue) {
      console.log(newValue, oldValue);
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
