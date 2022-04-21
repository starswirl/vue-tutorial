<template>
  <div class="headerRoot">
    <p>header</p>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      value: '',
    }
  },
}
</script>

<style scoped>
.headerRoot {
  width: 100%;
  height: 50px;
  background-color: darkgray;
}
</style>
