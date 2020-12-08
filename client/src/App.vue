<template>
  <div id="app">

    <header>
      <nav>
        <ul>
          <li><a v-on:click="toggle='character-viewer'">View all characters</a></li>
          <li><a v-on:click="toggle='character-creator'">Create a character</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <CharacterViewer v-show="toggle==='character-viewer'"/>
      <CharacterCreator v-show="toggle==='character-creator'"/>
    </main>

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
    },
    data: function() {
      return {
        toggle: "character-viewer"
      }
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

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  } 

  li {
    float: right;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  /* Change the link color to #111 (black) on hover */
  li a:hover {
    background-color: #111;
  } 

</style>
