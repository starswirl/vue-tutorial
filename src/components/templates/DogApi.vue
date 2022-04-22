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
        <v-select :items="store.breedList" v-model="state.targetBreeds">
        </v-select>
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
          :name="
            '犬種: ' + (!!store.dogImage ? store.dogImage.split('/')[4] : '')
          "
        />
      </div>
      <img class="docPic" :src="store.dogImage" />
    </div>

    <div><img class="img" src="/img/yukuefumei_pet_dog.png" /></div>
  </div>
</template>

<script>
import { URL } from '../../constants/api.js'
import TitleLabel from '../atoms/TitleLabel.vue'
import axios from 'axios'

export default {
  name: 'DogApi',
  components: { TitleLabel },
  data() {
    return {
      store: {
        breedList: [],
        dogImage: '',
      },
      state: {
        mode: '',
        targetBreeds: '',
      },
      url: {
        random: URL.DOG_API.RANDOM,
        breed: {
          first: URL.DOG_API.BREED.FIRST,
          second: URL.DOG_API.BREED.SECOND,
        },
        allBreed: URL.DOG_API.ALL_BREED,
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
    axios.get(this.url.allBreed).then((response) => {
      const listAllBreeds = Object.entries(response.data.message)
      const resultBreeds = listAllBreeds.flatMap((breed) => {
        // 犬種がネストしていない場合はそのまま返す
        if (breed[1].length < 1) return breed[0]
        // それ以外は犬種をすべて生成する
        return breed[1].map((breedDetail) => `${breed[0]}/${breedDetail}`)
      })
      this.store.breedList = resultBreeds
    })
    axios.get(this.url.random).then((response) => {
      this.store.dogImage = response.data.message
    })
  },
  methods: {
    getDog: function () {
      // https://dog.ceo/dog-api/
      const targetURL =
        this.state.mode === 'breed'
          ? this.url.breed.first +
            this.state.targetBreeds +
            this.url.breed.second
          : this.url.random
      axios.get(targetURL).then((response) => {
        this.store.dogImage = response.data.message
      })
    },
  },
  computed: {
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
  height: 800px;
}
.docPic {
  padding: 5px;
  width: 250px;
}
</style>
