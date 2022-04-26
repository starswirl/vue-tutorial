<template>
  <TitleLabel name="わんちゃんAPI" />
  <div class="dog">
    <div>
      <v-radio-group v-model="state.mode">
        <v-radio
          color="primary"
          v-for="(item, key) in constant.modeList"
          :key="key"
          :label="item.name"
          :value="item.id"
        ></v-radio>
      </v-radio-group>
      <TitleLabel :name="'mode:' + state.mode" />
      <div v-if="state.mode === 'breed'">
        <TitleLabel name="犬種を選択してください" />
        <v-select :items="breedList" v-model="state.targetBreeds"> </v-select>
        <TitleLabel :name="'選択犬種: ' + state.targetBreeds" />
      </div>
      <div>
        <v-btn
          flat
          color="secondary"
          v-on:click="getDog()"
          v-bind:disabled="isProcessing"
        >
          GET_DOG
        </v-btn>
      </div>
      <div v-if="state.mode !== 'breed'">
        <TitleLabel
          :name="'犬種: ' + (dogImage !== '' ? dogImage.split('/')[4] : '')"
        />
      </div>
      <img class="docPic" :src="dogImage" />
    </div>

    <div><img class="img" src="/img/yukuefumei_pet_dog.png" /></div>
  </div>
</template>

<script>
import TitleLabel from '../atoms/TitleLabel.vue'

export default {
  name: 'DogApi',
  components: { TitleLabel },
  data() {
    return {
      state: {
        mode: 'random',
        targetBreeds: '',
      },
      constant: {
        modeList: [
          {
            id: 'random',
            name: 'ランダム',
          },
          {
            id: 'breed',
            name: '犬種選択',
          },
        ],
      },
    }
  },
  created: function () {
    // @ts-ignore
    this.$store.dispatch('getBreedList')
    // @ts-ignore
    this.$store.dispatch('getRundomDog')
  },
  methods: {
    getDog: function () {
      // https://dog.ceo/dog-api/
      this.state.mode === 'breed'
        ? // @ts-ignore
          this.$store.dispatch('getRundomBreedDog', this.state.targetBreeds)
        : // @ts-ignore
          this.$store.dispatch('getRundomDog')
    },
  },
  computed: {
    breedList() {
      // @ts-ignore
      return this.$store.getters.breedList
    },
    dogImage() {
      // @ts-ignore
      return this.$store.getters.dogImage
    },
    isProcessing: function () {
      // ラジオボタンが選択されていない
      if (this.state.mode === '') {
        return true
      }
      // 犬種選択かつ犬種が選択されていない
      if (this.state.mode === 'breed' && this.state.targetBreeds === '') {
        return true
      }
      return false
    },
  },
}
</script>

<style scoped>
.img {
  width: 250px;
}
.dog {
  display: flex;
  padding: 5px;
}
.docPic {
  padding: 5px;
  width: 250px;
}
</style>
