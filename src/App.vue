<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
ul {
  padding-left: 0;
}
@media only screen and (max-width: 600px) {
  .home-logo {
    margin-left: -10%;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

.nav {
  font-size: 3vh;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
