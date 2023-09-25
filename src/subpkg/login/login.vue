<script lang="ts" setup>
import LoginButton from '../../components/LoginButton.vue'
</script>

<template>
  <div class="box">
    <image class="logo" src="https://www.ltfei.cn/img/logo.d05ba22d.webp" />
    <h1 class="text">登录到 Ltfei Blog</h1>
    <login-button></login-button>
  </div>
</template>

<style scoped lang="less">
.box {
  margin: 25px 20px;
  .text {
    margin: 10px 0 30px 0;
  }
}
.logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
