<!--
 * @Author: litfa
 * @Date: 2022-03-02 19:03:56
 * @LastEditTime: 2022-05-03 16:33:12
 * @LastEditors: litfa
 * @Description: 
 * @FilePath: /blog-miniprogram/src/pages/my/my.vue
 * 
-->
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useCounterStore } from '@/store/index'

import User from '@/components/User/User.vue'
import getUserInfo from '@/apis/getUserInfo'
import scanCode from '@/utils/scanCode'

const store = useCounterStore()
let user = computed(() => {
  return store
})

const logout = () => {
  uni.removeStorageSync('token')
  getUserInfo()
}
</script>

<template>
  <div class="header">
    <div class="content">
      <User v-if="user.isLogin" :userName="user.userName" :avatar="user.avatar" :isLogin="true"></User>
      <navigator v-else url="/subpkg/login/login">
        <User userName="登录/注册" :isLogin="false"></User>
      </navigator>
    </div>
    <div class="container">
      <Li>不知道放啥</Li>
      <Li>不放不好看</Li>
      <Li @click="scanCode">扫一扫</Li>
      <Li @click="logout">退出登录</Li>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "./my.less";
</style>
