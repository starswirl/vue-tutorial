<template>
  <div class="testCaseRoot">
    <div class="box">
      <div class="backgroundColor"><GoogleMap /></div>
    </div>
  </div>
</template>

<script>
import GoogleMap from '../components/templates/GoogleMap.vue'
export default {
  name: 'GoogleMapView',
  components: {
    GoogleMap,
  },
}
</script>

<style scoped>
.testCaseRoot {
  background-image: url(~@/assets/grass.jpg);
  height: 100vh;
}
.box {
  font-size: 20px;
  padding: 10px;
}
.backgroundColor {
  background-color: aliceblue;
  padding: 10px;
  height: 100%;
}
</style>
