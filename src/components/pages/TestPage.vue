<template>
  <div class="testCaseRoot">
    <div class="box">
      <div class="backgroundColor">
        <TitleLabel name="わんちゃん検索" />
        <InputForm />
        <DogApi />
      </div>
    </div>
  </div>
</template>

<script>
import TitleLabel from '../atoms/TitleLabel.vue'
import InputForm from '../atoms/InputForm.vue'
import DogApi from '../templates/DogApi.vue'

export default {
  name: 'TestPage',
  components: {
    TitleLabel,
    InputForm,
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
