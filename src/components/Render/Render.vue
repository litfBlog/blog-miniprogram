
<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="render" v-html="text"></div>
</template>

<style lang="less" scoped>
@import "./render.less";
</style>