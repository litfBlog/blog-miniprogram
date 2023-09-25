const base_url = import.meta.env.VITE_ApiUrl as string + import.meta.env.VITE_baseUrl as string

interface config {
  url?: string
  method?: "GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined
  data?: object
}

export default (config: config) => {
  return new Promise((resolve, reject) => {
    let token
    try {
      token = uni.getStorageSync('token')
    } catch (e) { }

    uni.request({
      header: {
        'Authorization': token
      },
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
