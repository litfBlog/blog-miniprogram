<!--
 * @Author: litfa
 * @Date: 2022-03-02 20:01:36
 * @LastEditTime: 2022-03-02 21:00:00
 * @LastEditors: litfa
 * @Description: 登录按钮
 * @FilePath: /blog-miniprogram/src/components/LoginButton.vue
 * 
-->
<script lang="ts" setup>
import { getCurrentInstance } from 'vue';

const login = async () => {
  const $http = getCurrentInstance()
  console.log($http);

  await uni.login({
    success(e) {
      console.log(e);
    }
  })
  await uni.getUserInfo({
    success(e) {
      console.log(e);
    }
  })
}
</script>

<template>
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