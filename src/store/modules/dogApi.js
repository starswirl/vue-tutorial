import {
  fetchBreedListAPI,
  fetchRamdomBreedDogAPI,
  fetchRamdomDogAPI,
} from '@/api/dogAPI'

const state = {
  breedList: [],
  dogImage: '',
}

const getters = {
  breedList: (state) => state.breedList,
  dogImage: (state) => state.dogImage,
}

const actions = {
  /** 犬種リスト */
  async getBreedList({ commit, dispatch, state }, payload) {
    commit('SET_BREED_LIST', await dispatch('fetchBreedList'))
  },
  async fetchBreedList({ commit, dispatch, state }, _payload) {
    const list = await fetchBreedListAPI()
    dispatch('dispatchDone', 'fetch BreedList')
    return list
  },
  /** ランダム犬検索 */
  async getRundomDog({ commit, dispatch, state }, payload) {
    commit('SET_DOG_IMAGE', await dispatch('fetchRamdomDog'))
  },
  async fetchRamdomDog({ commit, dispatch, state }, _payload) {
    const dogImage = await fetchRamdomDogAPI()
    dispatch('dispatchDone', 'fetch RamdomDog')
    return dogImage
  },
  /** 犬種ランダム検索 payload: 犬種*/
  async getRundomBreedDog({ commit, dispatch, state }, payload) {
    commit('SET_DOG_IMAGE', await dispatch('fetchRamdomBreedDog', payload))
  },
  async fetchRamdomBreedDog({ commit, dispatch, state }, payload) {
    const dogImage = await fetchRamdomBreedDogAPI(payload)
    dispatch('dispatchDone', 'fetch RamdomBreedDog')
    return dogImage
  },
  /** 成功時の処理 */
  dispatchDone(_, payload) {
    console.log(payload ? payload + 'done' : 'fetch done')
  },
}

const mutations = {
  SET_BREED_LIST(state, payload) {
    console.log('payload', payload)
    const listAllBreeds = Object.entries(payload.message)
    const resultBreeds = listAllBreeds.flatMap((breed) => {
      // 犬種がネストしていない場合はそのまま返す
      if (breed[1].length < 1) return breed[0]
      // それ以外は犬種をすべて生成する
      return breed[1].map((breedDetail) => `${breed[0]}/${breedDetail}`)
    })
    state.breedList = resultBreeds
  },
  SET_DOG_IMAGE(state, payload) {
    console.log('payload', payload)
    state.dogImage = payload.message
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
