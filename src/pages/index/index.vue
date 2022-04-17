<!--
 * @Author: litfa
 * @Date: 2022-03-02 18:39:33
 * @LastEditTime: 2022-04-17 16:04:41
 * @LastEditors: litfa
 * @Description: 首页
 * @FilePath: /blog-miniprogram/src/pages/index/index.vue
 * 
-->
<template>
  <view class="content">
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
</script>

<style lang="less">
page {
  background-color: @body-background-color;
}
</style>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  width: 100%;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
