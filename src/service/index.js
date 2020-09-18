/*
 * @Description:
 * @Author: CoolSnow (coolsnow2020@gmail.com)
 * @Date: 2020-09-14 17:46:51
 * @LastEditors: CoolSnow
 * @LastEditTime: 2020-09-14 18:20:56
 */
import axios from "axios"
import store from "@/store/"

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 请求地址
  timeout: 60000, // request timeout
  withCredentials: true
})

// request interceptor 拦截器
service.interceptors.request.use(
  config => {
    config.headers["Accept"] = "application/vnd.sd.v2+json"
    config.params = {
      ...config.params,
      lang: store.getters.language
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(response => {
  // console.log(response)
  const data = response.data
  const code = data.code
  if (response.status !== 200) {
    return Promise.reject(response.data)
  }
  // if (code === 401 || code === 403) {
  //   // Cookies.remove()
  //   // not in login page
  //   // if (window.location.pathname !== '/th/login') {
  //   //   store.dispatch('user/logout').then(() => {
  //   //     // location.reload()
  //   //     router.push({
  //   //       path: '/login',
  //   //       query: {
  //   //         redirect: encodeURIComponent(window.location.pathname.replace('/th', '') + window.location.search)
  //   //       }
  //   //     })
  //   //   })
  //   // }
  //   router.push({
  //     path: '/login',
  //     query: {
  //       redirect: encodeURIComponent(window.location.pathname + window.location.search)
  //     }
  //   })
  // }
  if (code !== 0) {
    // @params config.isExistCode
    // @doc 处理 服务端 特殊返回格式
    // @default false
    if (!response.config.isExistCode) {
      return Promise.reject(response.data)
    }
  }
  return response.data
})
export default service
