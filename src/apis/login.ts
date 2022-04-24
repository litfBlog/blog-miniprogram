/*
 * @Author: litfa
 * @Date: 2022-03-02 20:40:59
 * @LastEditTime: 2022-04-24 19:34:17
 * @LastEditors: litfa
 * @Description: 登录
 * @FilePath: /blog-miniprogram/src/apis/login.ts
 * 
 */
import http from './../utils/request'
export default (userInfo: any): Promise<any> => {
  return http({
    url: '/login/login',
    method: 'POST',
    data: userInfo
  })
}