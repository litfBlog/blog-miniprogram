<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useCounterStore } from '@/store/index'

import User from '@/components/User/User.vue'
import getUserInfo from '@/utils/getUserInfo'
import scanCode from '@/utils/scanCode'

const store = useCounterStore()
let user = computed(() => {
  return store
})

const logout = () => {
  uni.showModal({
    title: '退出登录',
    content: '确定要退出吗',
    success: async function(res) {
      if (res.confirm) {
        uni.removeStorageSync('token')
        await getUserInfo()
        uni.showToast({
          icon: 'success',
          title: '操作成功'
        })
        user.value.isLogin = false
      }
      //  else if (res.cancel) {}
    }
  })
}
</script>

<template>
  <div class="header">
    <div class="content">
      <navigator v-if="user.isLogin" url="/subpkg/edit_user_info/edit_user_info">
        <User :userName="user.userName" :avatar="user.avatar" :isLogin="true"></User>
      </navigator>
      <navigator v-else url="/subpkg/login/login">
        <User userName="登录/注册" :isLogin="false"></User>
      </navigator>
    </div>
    <div class="container">
      <Li>不知道放啥</Li>
      <Li>不放不好看</Li>
      <Li @click="scanCode">扫一扫</Li>
      <Li @click="logout" v-if="user.isLogin">退出登录</Li>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './my.less';
</style>
