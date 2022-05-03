<!--
 * @Author: litfa
 * @Date: 2022-05-03 16:14:27
 * @LastEditTime: 2022-05-03 16:34:03
 * @LastEditors: litfa
 * @Description: 列表
 * @FilePath: /blog-miniprogram/src/components/Li/Li.vue
 * 
-->
<script lang="ts" setup>
const emits = defineEmits(['click'])
</script>

<template>
  <li class="Li" @click="emits('click')">
    <slot></slot>
    <div class="icon"></div>
  </li>
</template>

<style lang="less" scoped>
.Li {
  width: 90%;
  box-sizing: border-box;
  margin: 20rpx auto;
  padding: 20rpx 10rpx;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 35rpx;
  &:active {
    background-color: #0001;
  }
  .icon {
    width: 15rpx;
    height: 15rpx;
    border-top: 3rpx solid rgb(106, 106, 106);
    border-right: 3rpx solid rgb(106, 106, 106);
    transform: rotate(45deg);
  }
}
</style>