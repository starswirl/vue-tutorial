<template>
  <div>
    test
    <InputForm/>
    <DogApi/>
  </div>
</template>

<script>
import InputForm from './atoms/InputForm.vue'
import DogApi from './scene/DogApi.vue'

export default {
  name: 'TestCase',
  components:{
    InputForm,
    DogApi
  },
}
</script>

<style scoped>

</style>
