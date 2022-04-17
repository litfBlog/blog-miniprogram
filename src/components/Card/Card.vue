<script lang="ts" setup>

</script>

<template>
  <view class="Card">
    <div class="user">
      <image mode="widthFix" src="https://www.litf.com.cn/api/data/userAvatar/5cf1bd8c8795e49ba2490795e9360a6a.jpg">
      </image>
      <span class="username">
        用户名
      </span>
    </div>

    <div class="content">
      <div class="text">
        <h3 class="title">标题标题标题</h3>
        <p class="desc">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</p>
      </div>
      <div class="cover">
        <image src="https://gitee.com/QH_ayang/img/raw/master/img/20210404210053.png" mode="widthFix"></image>
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
  margin-bottom: 15rpx;
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
  align-items: center;
  .text {
    .title {
      color: #000;
      font-weight: 550;
    }
    .desc {
      font-size: 30rpx;
    }
  }
  .cover {
    width: 500rpx;
    margin-left: 5rpx;
    image {
      width: 100%;
    }
  }
}
</style>