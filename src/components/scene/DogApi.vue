<template>
<div class="dog">
    <button v-on:click="created()">GET_DOG</button> 
    <div click=created>
        {{value}}
    </div>
    <img :src=value.message >
</div>

</template>

<script>

import axios from 'axios'

export default {
  name: 'DogApi',
    data () {
    return {
      value: ''
    }
  },

   methods: {
    created: function () {
    axios.get('https://dog.ceo/api/breeds/image/random ')
      .then(response => {
       this.value=response.data;
      })
  }
}   
}
</script>

<style scoped>
    .dog{
        padding:5px;
        background-color: aqua;
        height:400px;
    }
</style>
