/*
 * @Author: litfa
 * @Date: 2022-04-24 19:58:48
 * @LastEditTime: 2022-04-24 20:06:38
 * @LastEditors: litfa
 * @Description: 获取用户信息
 * @FilePath: /blog-miniprogram/src/utils/getUserInfo.ts
 * 
 */
import { useStore } from 'vuex'
import getUserInfoApi from '../apis/getUserInfo'

export default async (): Promise<any> => {
  const store = useStore()
  if (store.state.isLogin) {
    // 登录过的
    return store.state
  }
  // 没登陆
  // 有 token
  let token
  try {
    token = uni.getStorageSync('token')
  } catch (e) { }
  if (token) {
    const { data: res } = await getUserInfoApi()
    const { username: userName, avatar, id } = res.userInfo
    console.log(store.commit('setUserInfo', { isLogin: true, userName, avatar, id }))
    console.log(store.state)
  }
}