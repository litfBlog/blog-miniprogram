<!--
 * @Author: litfa
 * @Date: 2022-03-02 18:39:33
 * @LastEditTime: 2022-04-24 18:00:13
 * @LastEditors: litfa
 * @Description: 首页
 * @FilePath: /blog-miniprogram/src/pages/index/index.vue
 * 
-->
<template>
  <view class="content">
    <navigator v-for="i in list" :key="i.id" :url="`/subpkg/p/p?id=${i.id}`">
      <Card
        :username="i.username"
        :avatar="i.avatar"
        :title="i.title"
        :desc="i.desc"
        :cover="i.cover"
        :create_date="i.create_date"
      ></Card>
    </navigator>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import getListApi from './../../apis/getList'

const list: any = ref([])

const getList = async () => {
  const { data: res } = await getListApi()
  list.value = res.list

}
getList()
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
