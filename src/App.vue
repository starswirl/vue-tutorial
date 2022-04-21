<template>
  <v-app>
    <v-main>
      <PageHeader />
      <router-view />
      <PageFooter />
    </v-main>
  </v-app>
</template>

<script>
import 'normalize.css'
import PageHeader from './components/templates/PageHeader.vue'
import PageFooter from './components/templates/PageFooter.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
  },
  data: () => ({
    //
  }),
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
