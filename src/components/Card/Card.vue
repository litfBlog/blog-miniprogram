<script lang="ts" setup>
import propNames from './props'
const props = defineProps(propNames)
const baseUrl = import.meta.env.VITE_baseUrl || ''
</script>

<template>
  <view class="Card">
    <div class="user">
      <image mode="widthFix" :src="avatar">
      </image>
      <span class="username">
        {{ username }}
      </span>
    </div>

    <div class="content">
      <div class="text">
        <h3 class="title">{{ title }}</h3>
        <p class="desc">{{ desc }}</p>
      </div>
      <div class="cover">
        <image :src="`${baseUrl}${cover}`" mode="widthFix"></image>
      </div>
    </div>
  </view>
</template>

<style lang="less" scoped>
.Card {
  margin: 0 15rpx;
  margin-top: 20rpx;
  background-color: @card-background-color;
  padding: 15rpx;
  border-radius: 10rpx;
}
.user {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20rpx;
  image {
    width: 60rpx;
    border-radius: 50%;
    margin-right: 10rpx;
  }
  .username {
    font-size: 30rpx;
    color: #000a;
  }
}
.content {
  display: flex;
  .text {
    width: 900rpx;
    height: 100%;
    .title {
      color: #000;
      font-weight: 550;
    }
    .desc {
      font-size: 30rpx;
      word-break: break-all;
    }
  }
  .cover {
    width: 500rpx;
    height: 200rpx;
    overflow: hidden;
    margin-left: 5rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    image {
      width: 100%;
    }
  }
}
</style>