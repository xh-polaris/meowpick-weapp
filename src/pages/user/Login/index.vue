<script setup lang="ts">
import User from '../index'

const user = reactive(new User())

onShow(() => {
  console.log(user.getName())

  uni.request({
    url: "",
    method:"POST",
    header:{"content-type":"application/json"},
    data: {

    },
    success: function (res){

    }

  })

  //设置token
  //useTokenStore().setData("token")
})

</script>

<template>
  <layout>
    <view class="containar">
      <view class="avatarUrl">
        <button type="balanced" open-type="chooseAvatar" @chooseavatar="onChooseavatar">
          <image :src="avatarUrl" class="refreshIcon"></image>
        </button>
      </view>

      <view class="userName">
        <text>昵称：</text>
        <input type="nickName" class="weui-input" :value="userName" @blur="bindblur" placeholder="请输入昵称"
               @input="bindinput" />
      </view>

<!--      <nut-input-->
<!--          placeholder="请输入文本"-->
<!--          v-model="state.text"-->
<!--      />-->

      <button class="loginBtn" plain type="info">朴素按钮</button>
    </view>
  </layout>
</template>

<style scoped>

</style>