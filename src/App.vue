<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  padding: 2rem;
}
button {
    margin-right: 2rem;
}
form {
  padding: 1rem;
}
.post {
    margin-top: 2rem;
    padding: 1rem;
    background: #d9f2f0;
}
.post p {
    text-align: left;
}
</style>
