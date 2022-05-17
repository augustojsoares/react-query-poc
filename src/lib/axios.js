import Axios from 'axios'
import { storage } from 'utils'
import { BASE_API_URL, GLOBAL_NAMESPACE_STORAGE_KEY } from 'config'

function envRequestInterceptor(config) {
  const namespace = storage.get(GLOBAL_NAMESPACE_STORAGE_KEY) || {}
  config.params = namespace
  return config
}

function responseInterceptor(response) {
  return response.data
}

function errorInterceptor(error) {
  const message = error.response?.data?.message || error.message
  return Promise.reject(message)
}

export const axios = Axios.create({
  baseURL: BASE_API_URL,
})

axios.interceptors.request.use(envRequestInterceptor)
axios.interceptors.response.use(responseInterceptor, errorInterceptor)
