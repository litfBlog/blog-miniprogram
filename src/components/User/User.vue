<script lang="ts" setup>
import scanCode from '@/utils/scanCode'
const props = defineProps({
  isLogin: Boolean,
  userName: String,
  avatar: String
  // counts...
})
</script>

<template>
  <div class="user">
    <div class="left">
      <div class="avatar">
        <image :src="avatar"></image>
      </div>
      <span class="username">{{ userName }}</span>
    </div>
    <div class="scan" @click.stop="scanCode">
      <image class="icon-scan" src="@/static/scan-code_1.png" />
    </div>
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
</template>

<style lang="less" scoped>
.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50rpx;
  margin-right: 30rpx;
  color: #fff;

  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .scan {
    .icon-scan {
      width: 70rpx;
      height: 70rpx;
    }
  }

  .avatar {
    width: 130rpx;
    height: 130rpx;
    background-color: rgb(238, 238, 238);
    border: 2px solid #fff;
    border-radius: 50%;
    margin-right: 30rpx;
    overflow: hidden;

    image {
      width: 100%;
      height: 100%;
    }
  }

  .username {
    font-size: 50rpx;
    color: #fff;
  }
}

.data {
  height: 100rpx;
  // width: calc(100% - 150rpx);
  // margin-left: 75rpx;
  width: 100%;
  padding: 0 130rpx;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  margin-top: 25rpx;

  .item {
    display: flex;
    flex-direction: column;
    text-align: center;

    .count {
      font-size: 40rpx;
      color: #fff;
    }

    .text {
      font-size: 30rpx;
      color: #fff;
    }
  }
}
</style>
