<script setup lang="ts">
import User from '../index'

const user = reactive(new User())

function onLogin(){
  uni.login({
    provider: 'weixin',
    success: res => {
      console.log("user.code: " + user.code)
      console.log(res)
      user.code = res.code //获得code
      console.log("user.code: " + user.code)

      uni.request({
        url: "https://meowchat.xhpolaris.com/auth/sign_in",
        method: "POST",
        data: {
          "authId": "wxdffc445bde3313aa",
          "authType": "wechat",
          "verifyCode": res.code,
        },
        success: function (res) {
          console.log(res)

          if (res.statusCode == 200) {
            uni.setStorageSync("userId", res.data.userId)
            //uni.setStorageSync("accessToken", res.data.accessToken)
            //uni.setStorageSync("accessExpire", res.data.accessExpire)

            useTokenStore().setData(res.data.accessToken)

            uni.switchTab({
              url: "/pages/index/index/index"
            })
          }

        }
      })
    }
  })

}

onShow(() => {
  console.log(user.getName())

  // uni.login({
  //   provider: 'weixin',
  //   success: res => {
  //     console.log("user.code: " + user.code)
  //     console.log(res)
  //     user.code = res.code //获得code
  //     console.log("user.code: " + user.code)
  //
  //     uni.request({
  //       url: "https://meowchat.xhpolaris.com/auth/sign_in",
  //       method:"POST",
  //       data: {
  //         "authId": "wxdffc445bde3313aa",
  //         "authType": "wechat",
  //         "verifyCode": res.code,
  //       },
  //       success: function (res){
  //         console.log(res)
  //
  //         if(res.statusCode == 200){
  //           uni.setStorageSync("userId", res.data.userId)
  //           //uni.setStorageSync("accessToken", res.data.accessToken)
  //           //uni.setStorageSync("accessExpire", res.data.accessExpire)
  //
  //           useTokenStore().setData(res.data.accessToken)
  //
  //           uni.switchTab({
  //             url: "/pages/index/index/index"
  //           })
  //
  //           // uni.setStorage({
  //           //   key: "userId",
  //           //   data: res.userId,
  //           // }).then(r => {
  //           //   uni.setStorage({
  //           //     key: "accessToken",
  //           //     data: res.accessToken,
  //           //   })
  //           // }).then(r => {
  //           //   uni.setStorage({
  //           //     key: "accessExpire",
  //           //     data: res.accessExpire,
  //           //   })
  //           // }).then(r => {
  //           //   console.log("store success")
  //           // })
  //         }
  //
  //       }
  //
  //     })
  //
  //
  //   }
  // })



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
<!--          v-model="user.code"-->
<!--      />-->

      <nut-button class="loginBtn" plain type="info" @click="onLogin()">登录</nut-button>
    </view>
  </layout>
</template>

<style scoped>

</style>