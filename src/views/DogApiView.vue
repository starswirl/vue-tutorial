<template>
  <div class="testCaseRoot">
    <div class="box">
      <div class="backgroundColor">
        <DogApi />
      </div>
    </div>
  </div>
</template>

<script>
import DogApi from '../components/templates/DogApi.vue'

export default {
  name: 'TestPage',
  components: {
    DogApi,
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
