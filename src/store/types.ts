/*
 * @Author: litfa
 * @Date: 2022-03-08 09:49:21
 * @LastEditTime: 2022-03-08 09:52:06
 * @LastEditors: litfa
 * @Description: interface 
 * @FilePath: /blog/src/store/types.ts
 * 
 */
export interface User {
  isLogin?: boolean,
  userName?: string,
  avatar?: string,
  id?: number
}

export interface ProfileState {
  user?: User;
  error: boolean;
}