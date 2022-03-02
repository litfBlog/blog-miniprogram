<!--
 * @Author: litfa
 * @Date: 2022-03-02 19:03:56
 * @LastEditTime: 2022-03-02 20:00:47
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
  <button @click="toLogin">登录</button>
</template>

<style scoped>
</style>
