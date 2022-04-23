<!--
 * @Author: litfa
 * @Date: 2022-04-23 18:46:51
 * @LastEditTime: 2022-04-23 18:49:02
 * @LastEditors: litfa
 * @Description: 渲染组件
 * @FilePath: /blog-miniprogram/src/components/Render/Render.vue
 * 
-->
<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div v-html="text"></div>
</template>

<style lang="less" scoped>
</style>