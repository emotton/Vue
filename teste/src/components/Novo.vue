<template>
  <div>
    <h1>{{msg}}</h1>
    <h5>{{name}}</h5>
  </div>
</template>

<script>
export default {
  name: 'Novo',
  props: {
    msg: String
  },
  data: function(){
    return {
      name: "Eduardo Motton"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
