/*
 * @Author: litfa
 * @Date: 2022-04-17 16:35:52
 * @LastEditTime: 2022-04-17 16:57:11
 * @LastEditors: litfa
 * @Description: props
 * @FilePath: /blog-miniprogram/src/components/Card/props.ts
 * 
 */
export default {
  author: {
    type: Number,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  comment_count: {
    type: Number,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  createDate: {
    type: String
  },
  desc: {
    type: String
  },
  id: {
    type: Number
  },
  liked: {
    type: String
  },
  likes_count: {
    type: Number
  },
  status: {
    type: Number
  },
  title: {
    type: String
  },
  type: {
    type: String
  },
  username: {
    type: String
  },
  uuid: {
    type: String
  }
}