/*
 * @Author: litfa
 * @Date: 2022-03-22 11:33:11
 * @LastEditTime: 2022-04-23 18:57:23
 * @LastEditors: litfa
 * @Description: 获取文章
 * @FilePath: /blog-miniprogram/src/apis/getArticles.ts
 * 
 */
import request from './../utils/request'
import { useStore } from 'vuex'

export default (id: string | number): any => {

  // const store = useStore()
  // const isLogin = store.state.user.isLogin
  const isLogin = false
  return request({
    method: 'POST',
    url: !isLogin ? `/articles/getOne/getWXML/${id}` : `/articles/getOne/getWXML/${id}`
  })
}