<script lang="ts" setup>
import { reactive } from 'vue'
import getArticlesApi from '../../apis/getArticles'
import formatDate from '../../utils/formatDate'
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

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
  const { data: res } = await getArticlesApi(props.id)
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
    <span class="info">{{ formatDate(data.create_date) }} 作者:{{ data.username }}</span>
    <Render :text="data.content"></Render>
  </div>
</template>

<style lang="less" scoped>
.p {
  width: 100%;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 60rpx;
    font-weight: bold;
    margin: 10rpx 10rpx 0 10rpx;
  }
  .info {
    margin-left: 10rpx;
    color: rgb(66, 67, 67);
    font-size: 28rpx;
  }
}
</style>
