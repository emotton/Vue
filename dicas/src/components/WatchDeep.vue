<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <input type="text" v-model="pessoa.nome" />
    </div>
    <div>
      <input type="text" v-model="pessoa.endereco.rua" />
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "WatchDeep",
  props: {
    msg: String,
  },
  data() {
    return {
      pessoa: {
        nome: "Eduardo Motton",
        endereco: {
          rua: "Jose Marques Nogueira, 421",
        },
      },
    };
  },
  watch: {
    "pessoa.nome": {
      handler: (newValue, oldValue) => {
        console.log("pessoa.nome =>", newValue, "-", oldValue);
      },
    },
    "pessoa.endereco.rua": {
      handler: (newValue, oldValue) => {
        console.log("pessoa.endereco.rua =>", newValue, "-", oldValue);
      },
    },
    "pessoa": {
      handler: (newValue, oldValue) => {
        console.log("pessoa =>", JSON.stringify(newValue), "-", JSON.stringify(oldValue));
      }, deep: true
    },
  },
};
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
