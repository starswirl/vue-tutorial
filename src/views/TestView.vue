<template>
  <div class="testCaseRoot">
    <div class="box">
      <div class="backgroundColor">
        <TitleLabel name="TEST" />
        <InputForm />
        aaa
        <v-btn flat color="secondary" v-on:click="increment">
          increment {{ step }}
        </v-btn>
        <span>total {{ count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import TitleLabel from '../components/atoms/TitleLabel.vue'
import InputForm from '../components/atoms/InputForm.vue'

export default {
  name: 'TestPage',
  components: {
    TitleLabel,
    InputForm,
  },
  computed: {
    step() {
      // @ts-ignore
      return this.$store.getters.step
    },
    count() {
      // @ts-ignore
      return this.$store.getters.count
    },
  },
  methods: {
    increment() {
      // @ts-ignore
      this.$store.dispatch('increment')
    },
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
