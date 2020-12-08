<template>
  <div class="header">

    <header>
      <nav>
        <ul>
          <li><a v-on:click="toggle='character-viewer'">View all characters</a></li>
          <li><a v-on:click="toggle='character-creator'">Create a character</a></li>
        </ul>
      </nav>
          
      <CharacterViewer v-show="toggle==='character-viewer'"/>
      <CharacterCreator v-show="toggle==='character-creator'"/>
  
    </header>

  </div>
</template>

<script>
    export default {
    name: 'Header',
    data: function() {
      return {
        toggle: "character-viewer"
      }
    }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  header {
    background-color: palegoldenrod;
  }

  nav ul {
    list-style-type: none;
  }

  nav li {
    /* display: inline; */
    float: right;
  }

  nav a {
    display: block;
    float: right;
    margin: 12px;
    Padding: 6px;
    color: black;
  }


</style>
