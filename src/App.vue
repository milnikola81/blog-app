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
/* @import url('https://fonts.googleapis.com/css?family=Nunito+Sans'); */

#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* background: #b3d4fc; */
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
    padding: 2rem;
    background: #ffffff;
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0,0,0,.08);
}
.post p {
    text-align: left;
}
</style>
