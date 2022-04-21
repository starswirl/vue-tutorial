<template>
  <div class="home">
    <DogApi />
  </div>
</template>

<script>
// @ is an alias to /src
import DogApi from '@/components/templates/DogApi.vue'

export default {
  name: 'HomeView',
  components: {
    DogApi,
  },
}
</script>
