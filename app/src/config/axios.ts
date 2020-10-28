import axios from 'axios'

declare module 'axios' {
  interface AxiosRequestConfig {
    cache?: boolean
  }
}

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

const Api = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 3000,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
  withCredentials: false,
})

Api.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem('access_token')
  if (accessToken) {
    config.headers['Authorization'] = 'Bearer ' + accessToken
  }
  return config
})

Api.interceptors.response.use(
  function (response) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(response.data), 3000) // this line emulate slow network
    })
  },
  function (error) {
    console.log(error)
    return Promise.reject(error)
  }
)

export default Api
