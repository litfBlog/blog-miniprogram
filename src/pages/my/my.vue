<!--
 * @Author: litfa
 * @Date: 2022-03-02 19:03:56
 * @LastEditTime: 2022-04-24 19:16:12
 * @LastEditors: litfa
 * @Description: 
 * @FilePath: /blog-miniprogram/src/pages/my/my.vue
 * 
-->
<script lang="ts" setup>
const toLogin = () => {
  uni.navigateTo({
    url: '/subpkg/login/login'
  })
}
</script>

<template>
  <div class="header" @click="toLogin">
    <div class="content">
      <div class="user">
        <div class="avatar"></div>
        <span class="username">登录/注册</span>
      </div>
      <div class="data">
        <div class="item">
          <span class="count">0</span>
          <span class="text">粉丝</span>
        </div>
        <div class="item">
          <span class="count">0</span>
          <span class="text">获赞</span>
        </div>
        <div class="item">
          <span class="count">0</span>
          <span class="text">文章</span>
        </div>
      </div>
    </div>
    <div class="container"></div>
  </div>
  <!-- <button @click="toLogin">登录</button> -->
</template>

<style lang="less" scoped>
@import "./my.less";
</style>
