<!--
 * @Author: litfa
 * @Date: 2022-03-02 19:03:56
 * @LastEditTime: 2022-04-24 20:26:21
 * @LastEditors: litfa
 * @Description: 
 * @FilePath: /blog-miniprogram/src/pages/my/my.vue
 * 
-->
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import User from '@/components/User/User.vue'

const store = useStore()
let user = computed(() => {
  return store.state.user
})
</script>

<template>
  <div class="header">
    <div class="content">
      <User v-if="user.isLogin" :userName="user.userName" :avatar="user.avatar"></User>
      <navigator v-else url="/subpkg/login/login">
        <User userName="登录/注册"></User>
      </navigator>
    </div>
    <div class="container"></div>
  </div>
</template>

<style lang="less" scoped>
@import "./my.less";
</style>
