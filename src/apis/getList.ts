import request from './../utils/request'

export default (offset?: number, limit?: number): any => {
  return request({
    url: '/articles/get/home',
    method: 'POST',
    data: {
      offset,
      limit
    }
  })
}

export const getUser = (offset?: number, limit?: number, author?: number | string) => {
  return request({
    url: '/articles/get/user',
    method: 'POST',
    data: {
      offset,
      limit,
      author
    }
  })
}
