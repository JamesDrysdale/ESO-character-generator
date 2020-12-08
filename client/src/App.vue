<template>

  <CharacterViewer/>
</template>

<script>
import CharacterViewer from './components/CharacterViewer.vue'

export default {
  name: 'App',
  components: {
    CharacterViewer
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
