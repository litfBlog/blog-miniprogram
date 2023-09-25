<script setup lang="ts">
import { ref } from "vue";
import { useCounterStore } from "@/store/index";
import editUserInfoApi from "@/apis/editUserInfo";
import getUserInfo from "@/utils/getUserInfo";

const user = useCounterStore();

const username = ref(user.userName);
const avatar = ref(user.avatar);
console.log(user);

const uploadAvatar = async (e: any) => {
  console.log("event");
  uni.uploadFile({
    url: "https://api.ltfei.cn/blog/articles/upload?id=avatar&isCover=false",
    filePath: e.detail.avatarUrl,
    name: "file",
    header: {
      Authorization: uni.getStorageSync("token"),
    },
    success(uploadFileRes) {
      const data = JSON.parse(uploadFileRes.data);
      avatar.value = "//" + data.Location;
    },
  });
};

const submit = async () => {
  const { data: res } = await editUserInfoApi(username.value, avatar.value);
  if (res.status == 1) {
    uni.showToast({
      title: "修改成功",
    });
    await getUserInfo()
    setTimeout(() => {
      uni.reLaunch({
        url: "/pages/index/index",
      });
    }, 1000);
  } else {
    uni.showModal({
      title: "修改失败",
      content: res.msg,
      showCancel: false,
    });
  }
};
</script>

<template>
  <div class="edit_userinfo">
    <h3 class="sub_title">用户名</h3>
    <input type="nickname" v-model="username" />
    <h3 class="sub_title">头像</h3>
    <button
      class="upload"
      open-type="chooseAvatar"
      @chooseavatar="uploadAvatar"
    >
      <image
        v-if="!avatar"
        class="upload-icon"
        src="/static/upload.png"
        mode="aspectFit"
        alt=""
      />
      <image v-else class="avatar" :src="avatar" mode="aspectFit" alt="" />
    </button>
    <button class="submit" @click="submit">提交</button>
  </div>
</template>

<style lang="less" scoped>
.edit_userinfo {
  display: flex;
  flex-direction: column;
  padding: 20rpx;
  align-items: flex-start;
  input {
    width: 100%;
    border: 1px solid #aaaa;
    transition: all 0.3s;
    margin: 5rpx 0 10rpx 0;
    border-radius: 4px;
    padding: 0 3px;
    box-sizing: border-box;
    &:hover {
      border: 1px solid @primary;
    }
  }
  .sub_title {
    margin: 10px 0 5px 0;
  }
  .upload {
    width: 80px;
    height: 80px;
    margin: 0;
    .upload-icon {
      max-width: 80%;
      max-height: 100%;
    }
    .avatar {
      width: 100%;
      height: 100%;
    }
  }
  .submit {
    width: 100%;
    height: 35px;
    padding: 0;
    background-color: @primary;
    font-size: 16px;
    line-height: 35px;
    color: #fff;
    margin-top: 20px;
  }
}
</style>
