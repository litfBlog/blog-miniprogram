/*
 * @Author: litfa
 * @Date: 2022-04-24 19:58:48
 * @LastEditTime: 2022-05-03 16:43:29
 * @LastEditors: litfa
 * @Description: 获取用户信息
 * @FilePath: /blog-miniprogram/src/utils/getUserInfo.ts
 * 
 */
import getUserInfoApi from '../apis/getUserInfo'
import { useCounterStore } from '../store/index'
export default async (): Promise<any> => {
  const store = useCounterStore()
  let token
  try {
    token = uni.getStorageSync('token')
  } catch (e) { }
  // 有 token
  if (token) {
    const { data: res } = await getUserInfoApi()
    if (res.status !== 1) return store.increment({ isLogin: false })
    const { username: userName, avatar, id } = res.userInfo
    console.log(store);
    console.log(useCounterStore());

    store.increment({ isLogin: true, userName, avatar, id })
  } else {
    store.increment({ isLogin: false })
  }
}