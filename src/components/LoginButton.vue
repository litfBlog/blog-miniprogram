<!--
 * @Author: litfa
 * @Date: 2022-03-02 20:01:36
 * @LastEditTime: 2022-03-04 17:54:21
 * @LastEditors: litfa
 * @Description: 登录按钮
 * @FilePath: /blog-miniprogram/src/components/LoginButton.vue
 * 
-->
<script lang="ts" setup>
import loginApi from './../apis/login'
import { ref } from 'vue'

// 获取code
let { query, scene } = uni.getLaunchOptionsSync()
if (query.scene) scene = query.scene

// 展示是否为网页端登录
let isScan = ref(false)
if (scene.toString()?.length > 4) {
  isScan.value = true
}

// 登录
const login = async () => {
  interface userInfo {
    avatarUrl?: string
    language?: string
    nickName?: string
  }
  interface loginData {
    code?: string
    signature?: string
    encryptedData?: string
    iv?: string
    scene?: string | number
    userInfo?: userInfo
  }

  let userData: loginData = {}
  // 登录
  uni.login({
    success(e) {
      console.log(e);
      userData.code = e.code
    }
  })
  // 获取用户信息
  uni.getUserProfile({
    desc: '展示头像、昵称等信息',
    success(e: any) {
      let { nickName, avatarUrl, language } = e.userInfo
      let { encryptedData, signature, iv } = e
      userData = { ...userData, encryptedData, signature, iv, scene }
      userData.userInfo = { nickName, avatarUrl, language }
      loginApi(userData)
    }
  })

}
</script>

<template>
  {{ isScan }}
  <div v-if="isScan">登陆到网页端</div>
  <div v-else>登录小程序</div>
  <button @click="login">一键登录</button>
</template>

<style lang="less" scoped>
button {
  background-color: @primary;
  margin: 100rpx 15rpx;
  color: #fff;
  border: none;
}
</style>