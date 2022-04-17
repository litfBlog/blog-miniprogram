/*
 * @Author: litfa
 * @Date: 2022-03-15 18:31:55
 * @LastEditTime: 2022-04-17 16:31:58
 * @LastEditors: litfa
 * @Description: 获取首页文章列表
 * @FilePath: /blog-miniprogram/src/apis/getList.ts
 * 
 */
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