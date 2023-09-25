import http from './../utils/request'
export default (userInfo: any): Promise<any> => {
  return http({
    url: '/login/login',
    method: 'POST',
    data: userInfo
  })
}