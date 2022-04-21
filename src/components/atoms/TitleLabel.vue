<template>
  <div>{{ name }}</div>
</template>

<script>
export default {
  name: 'titleLabelRoot',
  props: ['name'],
  data() {
    return {
      value: '',
    }
  },
}
</script>

<style scoped></style>
