/*
 * @Author: litfa
 * @Date: 2022-03-02 20:40:59
 * @LastEditTime: 2022-03-04 14:54:51
 * @LastEditors: litfa
 * @Description: 登录
 * @FilePath: /blog-miniprogram/src/apis/login.ts
 * 
 */
import http from './../utils/request'
export default (userInfo: any) => {
  return http({
    url: '/login/login',
    method: 'POST',
    data: userInfo
  })
}