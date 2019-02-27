import axios from 'axios'
import Vue from 'vue'
import env from '../../config/dev.env'
import store from '../store'
import router from '../router'
let token = ''
// axios.defaults.timeout = 5000;
axios.defaults.baseURL = env.API_ROOT.replace(/"/g, '') + 'mingxieku/'
// http request 拦截器
axios.interceptors.request.use(
  // 设置请求头和token
  config => {
    config.headers = (() => {
      let headers = {
        'Content-Type': 'application/json'
      }
      if (token) {
        headers.Authorization = token
      } else if (store.getters.GET_USER.token) {
        token = store.getters.GET_USER.token
        headers.Authorization = token
      }
      return headers
    })()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status === 401) {
      router.push('/user/login')
      console.log(store.commit('CLEAR_USER'))
      token = ''
    }
    return Promise.reject(error)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

function GET (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function POST (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function DELETE (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, {
        data: data
      })
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function PUT (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

function setToken (data) {
  token = data
}
Vue.prototype.$GET = GET
Vue.prototype.$POST = POST
Vue.prototype.$DELETE = DELETE
Vue.prototype.$PUT = PUT
Vue.prototype.$axios = axios
const http = {
  GET,
  POST,
  DELETE,
  PUT,
  setToken
}
export default http
