<template>
  <div class="hello">
    <h1>{{ $t("message.title") }}</h1>
    <h2>{{ $t("message.hello") }}</h2>
    <div>
      <button @click="changeLocale">Mudar para {{ locale }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      locale: "Português",
    };
  },
  methods: {
    changeLocale() {
      this.$i18n.locale = this.$i18n.locale == "en" ? "pt" : "en";
      this.locale = this.locale == "Inglês" ? "Português" : "Inglês";
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
