<template>
  <div id="app">
    <Bread></Bread>
    <router-view/>
  </div>
</template>

<script>
import Bread from "./components/bread"

export default {
  components: { Bread },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
