<template>
  <v-footer class="bg-grey-lighten-1">
    <v-row justify="center" no-gutters>
      <v-col class="text-center text-white mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'PageFooter',
  data() {
    return {
      value: '',
    }
  },
}
</script>

<style scoped>
.footerRoot {
  width: 100%;
  height: 50px;
  background-color: darkgray;
}
</style>
