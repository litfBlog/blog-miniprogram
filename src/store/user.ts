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