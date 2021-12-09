<template>
  <div class="hello">
    <h1>HELLO</h1>
    <div>{{msg}}</div>
    <div>{{nome}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  get nome(){
    return this.$store.state.nome;
  }
}
</script>
