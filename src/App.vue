<template>
  <v-app>
    <v-app>
      <v-app-bar app color="primary">
        <v-btn to="/">Home</v-btn>
        <v-btn to="/about">About</v-btn>
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
