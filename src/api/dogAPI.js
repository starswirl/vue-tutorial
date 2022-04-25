import { API_URL } from '@/constants/api'
import axios from 'axios'

export const fetchBreedListAPI = async () => {
  const res = await axios.get(API_URL.DOG_API.ALL_BREED)
  return res.data
}

export const fetchRamdomDogAPI = async () => {
  const res = await axios.get(API_URL.DOG_API.RANDOM)
  return res.data
}

export const fetchRamdomBreedDogAPI = async (targetBreed) => {
  const res = await axios.get(
    API_URL.DOG_API.BREED.FIRST + targetBreed + API_URL.DOG_API.BREED.SECOND
  )
  return res.data
}
