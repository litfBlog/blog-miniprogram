/*
 * @Author: litfa
 * @Date: 2022-03-22 11:33:11
 * @LastEditTime: 2022-04-17 16:29:47
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
    url: !isLogin ? `/articles/getOne/${id}` : `/articles/getOne/detailed/${id}`
  })
}