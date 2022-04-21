<template>
  <v-app-bar color="secondary" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>My Apps</v-toolbar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" bottom temporary>
    <nav>
      <div v-for="(value, key) in items" :key="key">
        <router-link :to="value.path">{{ value.title }}</router-link>
      </div>
    </nav>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      drawer: false,
      items: [
        {
          title: 'Home',
          path: '/',
        },
        {
          title: 'About',
          path: '/about',
        },
        {
          title: 'test',
          path: '/test',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
