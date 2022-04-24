/*
 * @Author: litfa
 * @Date: 2022-03-08 09:54:08
 * @LastEditTime: 2022-04-24 19:59:47
 * @LastEditors: litfa
 * @Description: 获取用户信息
 * @FilePath: /blog-miniprogram/src/apis/getUserInfo.ts
 * 
 */
import request from '../utils/request'
export default (): any => {
  return request({
    method: 'POST',
    url: '/getUserInfo'
  })
}