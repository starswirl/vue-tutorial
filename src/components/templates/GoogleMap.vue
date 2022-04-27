<template>
  <div>
    <div class="map" ref="googleMap" />
  </div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader'
export default {
  name: 'GoogleMap',
  data() {
    return {
      loader: null,
      mapOptions: {
        center: {
          lat: 0,
          lng: 0,
        },
        zoom: 4,
      },
    }
  },
  async mounted() {
    console.log('process.env.VUE_APP_GOOGLE_API')
    console.log(process.env)
    this.loader = new Loader({
      apiKey: process.env.VUE_APP_GOOGLE_API,
      version: 'weekly',
      libraries: ['places'],
    })
    this.initializeMap()
  },
  methods: {
    initializeMap() {
      this.loader
        .load()
        .then((google) => {
          new google.maps.Map(this.$refs.googleMap, this.mapOptions)
        })
        .catch((e) => {
          // do something
          console.log(e)
        })
    },
  },
}
</script>

<style scoped>
.map {
  width: 100vw;
  height: 100vh;
}
</style>
