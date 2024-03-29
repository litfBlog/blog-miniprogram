// import { createStore } from 'vuex'

// import user from './user'

// export default createStore({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//     user
//   }
// })
import type { User } from './types'
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      isLogin: false,
      userName: '123',
      avatar: '',
      id: -1
    };
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    increment(data: User) {
      this.isLogin = data?.isLogin || this.isLogin
      this.userName = data?.userName || this.userName
      this.avatar = data?.avatar || this.avatar
      this.id = data?.id || this.id
    },
  },
});