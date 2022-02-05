<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <WatchProperty msg="Bem vindo ao Watch Property" />
    <WatchDeep msg="Bem vindo ao WatchDeep" />
    <ComputedPlus msg="Bem vindo ao ComputedPlus" />
  </div>
</template>

<script>
import WatchProperty from './components/WatchProperty.vue'
import WatchDeep from './components/WatchDeep.vue'
import ComputedPlus from './components/ComputedPlus.vue'

export default {
  name: 'App',
  components: {
    WatchProperty, 
    WatchDeep,
    ComputedPlus
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
