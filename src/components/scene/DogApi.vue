<template>
  <div class="dog">
    <div>
      検索モードをを選択してください
      <br />
      <input type="radio" id="one" value="random" v-model="mode" />
      <label for="one">ランダム</label>
      <br />
      <input type="radio" id="two" value="breed" v-model="mode" />
      <label for="two">犬種選択</label>
      <br />
      mode: {{ mode }}
      <br />
      <div v-if="mode === 'breed'">
        犬種を選択してください
        <select v-model="targetBreeds">
          <option disabled value="">犬種を選択してください</option>
          <option
            v-for="option in breeds"
            v-bind:value="option"
            v-bind:key="option"
          >
            {{ option }}
          </option>
        </select>
        <div>targetBreeds: {{ targetBreeds }}</div>
      </div>
      <div>
        <button v-on:click="getDog()" v-bind:disabled="isProcessing">
          GET_DOG
        </button>
      </div>

      <div v-if="mode !== 'breed'">
        <div>
          犬種:
          {{ !!result.message ? result.message.split('/')[4] : result.message }}
        </div>
      </div>
      <img class="docPic" :src="result.message" />
    </div>

    <div><img class="img" src="@/assets/img/yukuefumei_pet_dog.png" /></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DogApi',
  data() {
    return {
      result: '',
      mode: '',
      breeds: [],
      targetBreeds: '',
      url: {
        random: 'https://dog.ceo/api/breeds/image/random',
        breed: {
          first: 'https://dog.ceo/api/breed/',
          second: '/images/random',
        },
        allBreed: 'https://dog.ceo/api/breeds/list/all',
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

      this.breeds = resultBreeds
    })

    axios.get(this.url.random).then((response) => {
      this.result = response.data
    })
  },
  methods: {
    getDog: function () {
      // https://dog.ceo/dog-api/
      const targetURL =
        this.mode === 'breed'
          ? this.url.breed.first + this.targetBreeds + this.url.breed.second
          : this.url.random
      axios.get(targetURL).then((response) => {
        this.result = response.data
      })
    },
  },
  computed: {
    isProcessing: function () {
      // ラジオボタンが選択されていない
      if (this.mode === '') {
        return true
      }
      // 犬種選択かつ犬種が選択されていない
      if (this.mode === 'breed' && this.targetBreeds === '') {
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
  height: 100%;
}
.docPic {
  width: 250px;
}
</style>
