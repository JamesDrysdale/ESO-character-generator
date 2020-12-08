<template>
<div id="app">
  <CharacterViewer/>
  <CharacterCreator/>
</div>
</template>

<script>
import CharacterViewer from './components/CharacterViewer.vue'
import CharacterCreator from './components/CharacterCreator.vue'

export default {
  name: 'App',
  components: {
    CharacterViewer,
    CharacterCreator
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
