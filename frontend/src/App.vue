<template>
  <div id="app" class="container is-max-desktop">
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>
/* import style bulma */
@import "~bulma/css/bulma.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
