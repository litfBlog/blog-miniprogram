import request from '../utils/request'
export default (): any => {
  return request({
    method: 'POST',
    url: '/getUserInfo'
  })
}