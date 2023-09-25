<!--
 * @Author: litfa
 * @Date: 2022-03-02 20:01:36
 * @LastEditTime: 2022-05-03 16:11:41
 * @LastEditors: litfa
 * @Description: 登录按钮
 * @FilePath: /blog-miniprogram/src/components/LoginButton.vue
 * 
-->
<script lang="ts" setup>
import loginApi from "./../apis/login";
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import getUserInfo from "../utils/getUserInfo";

// 获取code
let { query, scene: launchScene } = uni.getLaunchOptionsSync();

let scene = launchScene.toString();

if (query.scene) scene = query.scene;

// 小程序内扫码跳转
onLoad((data) => {
  if (data.scene) scene = data.scene;
  if (scene.toString()?.length > 4) {
    isScan.value = true;
  }
});

// 展示是否为网页端登录
let isScan = ref(false);
if (scene.toString()?.length > 4) {
  isScan.value = true;
}
// 登录
const login = async () => {
  console.log("开始登录");

  uni.showLoading({});
  // 登录
  uni.login({
    async success(e) {
      console.log(e);
      const { data: res } = await loginApi({
        code: e.code,
        scene,
      });

      if (res.status == 1) {
        try {
          uni.setStorageSync("token", res.token);
        } catch (e) {
          uni.showToast({
            icon: "error",
            title: "登录失败，请稍后再试(token)",
          });
        }
      }
      await getUserInfo();
      setTimeout(() => {
        if (res.type == "register") {
          return uni.reLaunch({
            url: "/subpkg/edit_user_info/edit_user_info",
          });
        }
        uni.reLaunch({
          url: "/pages/my/my",
        });
      }, 1000);
    },
    fail(e) {
      console.log(e);
      uni.showModal({
        title: "登录失败",
      });
    },
  });
};
</script>

<template>
  <div v-if="isScan">登陆到网页端</div>
  <button class="login_button" @click="login">一键登录</button>
</template>

<style lang="less" scoped>
.login_button {
  background-color: @primary;
  color: #fff;
  border: none;
  margin-top: 20px;
}
</style>
