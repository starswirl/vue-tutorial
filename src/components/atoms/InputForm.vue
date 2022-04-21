<template>
  <div class="displayBox">
    <input class="input" v-model="value" />
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  data() {
    return {
      value: '',
    }
  },
}
</script>

<style scoped>
.displayBox {
  display: flex;
}
</style>
