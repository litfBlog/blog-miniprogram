<!--
 * @Author: litfa
 * @Date: 2022-04-17 18:05:55
 * @LastEditTime: 2022-04-23 19:00:18
 * @LastEditors: litfa
 * @Description: 文章页面
 * @FilePath: /blog-miniprogram/src/subpkg/p/p.vue
 * 
-->
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import getArticlesApi from '../../apis/getArticles'
const { query } = uni.getLaunchOptionsSync()

const data = reactive({
  avatar: '',
  content: '',
  cover: '',
  create_date: 0,
  desc: '',
  id: 0,
  liked: 0,
  likes_count: '-',
  status: -1,
  title: '',
  username: ''
})

const getArticles = async () => {
  const { data: res } = await getArticlesApi(query.id)
  if (res.status == 1) {
    data.avatar = res.data.avatar
    data.content = res.data.content
    data.cover = res.data.cover
    data.create_date = res.data.create_date
    data.desc = res.data.desc
    data.id = res.data.id
    data.liked = res.data.liked
    data.likes_count = res.data.likes_count
    data.status = res.data.status
    data.title = res.data.title
    data.username = res.data.username
  }
}
getArticles()
</script>

<template>
  <div class="p">
    <text class="title">{{ data.title }}</text>
    <Render :text="data.content"></Render>
  </div>
</template>

<style lang="less" scoped>
.p {
  width: 100%;
  .title {
    font-size: 50rpx;
    font-weight: bold;
  }
}
</style>