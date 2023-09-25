import request from '../utils/request'

export default (username: string, avatar: string): Promise<any> => {
  return request({
    method: 'POST',
    url: '/editUserInfo',
    data: {
      username,
      avatar
    }
  })
}
