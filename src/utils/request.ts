/*
 * @Author: litfa
 * @Date: 2022-03-03 10:09:26
 * @LastEditTime: 2022-04-17 17:16:51
 * @LastEditors: litfa
 * @Description: http
 * @FilePath: /blog-miniprogram/src/utils/request.ts
 * 
 */
interface config {
  url?: string
  method?: "GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined
  data?: object
}

// const base_url = 'http://127.0.0.1:3000/api'
const base_url = import.meta.env.VITE_ApiUrl as string + import.meta.env.VITE_baseUrl as string
export default (config: config) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: base_url + config.url || base_url,
      method: config.method || 'GET',
      data: config.data,
      success(e) {
        resolve(e)
      },
      fail(e) {
        reject(e)
      }
    })
  })
}
