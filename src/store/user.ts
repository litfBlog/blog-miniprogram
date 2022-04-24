/*
 * @Author: litfa
 * @Date: 2022-03-07 19:11:52
 * @LastEditTime: 2022-03-09 10:32:03
 * @LastEditors: litfa
 * @Description: 用户模块
 * @FilePath: /blog/src/store/user.ts
 * 
 */
import { ProfileState, User } from './types'
export default {
  state: {
    isLogin: false,
    userName: '123',
    avatar: '',
    id: -1
  },
  mutations: {
    setUserInfo(state: User, data?: User): void {
      state.isLogin = data?.isLogin || state.isLogin
      state.userName = data?.userName || state.userName
      state.avatar = data?.avatar || state.avatar
      state.id = data?.id || state.id
    }

  },
  actions: {
  }
}