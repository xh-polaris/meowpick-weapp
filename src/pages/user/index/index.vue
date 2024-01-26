<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
// import uniBadge from '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue'
// export default {
//   components: { uniBadge }
// }

// export default {
//   data() {
//     return {
//       username: "aaa",
//     };
//
//   }
// }
import User from './index'

const user = reactive(new User())


onShow(() => {

    const curPages: any = getCurrentPages()[0] // 获取当前页面实例
    if (typeof curPages.getTabBar === 'function' && curPages.getTabBar()) {
        curPages.getTabBar().setData({
            active: 4, // 表示当前菜单的索引，该值在不同的页面表示不同
        })
    }

    http.CourseController.get("122").then(res => {
      console.log(res.data.payload)
      console.log(typeof res.data.payload)
    })

  // http.UserController.add({
  //   name: "tom",
  //   avatar: "123.jpg"
  // }).then(res => {
  //   console.log(res.data.payload)
  //   console.log(typeof res.data.payload)
  // })

    //测试获取用户信息
  // uni.login({
  //   provider: 'weixin',
  //   success: res => {
  //     console.log("user.code: " + user.code)
  //     console.log(res)
  //     user.code = res.code //获得code
  //     console.log("user.code: " + user.code)
  //
  //     let code = user.code
  //     http.UserController.getTokenByCode(code).then(res => {
  //       console.log(res.data.payload)
  //
  //
  //     })
  //   }
  // })

})

const data = [
    {id: '0'},
    {id: '1'},
    {id: '2'}
]

</script>

<template>
    <layout>
      <view class="user-topbox">
        <image class="user-img" :src="user.getAvatar()" mode="scaleToFill"></image>

<!--        <view class="user-img-corner">1</view>-->
<!--        <uni-badge text="8"></uni-badge>-->

        <text class="user-name" >{{user.getName()}}</text>

      </view>


      <view class='container_4'>
        <view class='middle-item' hover-stay-time="150">
          <image class="image_tupian_1" src="../../static/point.png"></image>
          <text class='text_2'>个人信息</text>
          <image class="image-jiantou" src="../../static/to.png"></image>
        </view>

        <view class="view_line"></view>

        <view class='middle-item' hover-class="opcity" hover-stay-time="150">
          <image class="image_tupian_1" src="../../static/choujiang.png"></image>
          <text class='text_2'>评论管理</text>
          <image class="image-jiantou" src="../../static/to.png"></image>
        </view>

        <view class="view_line"></view>

        <view class='middle-item' hover-class="opcity" hover-stay-time="150">
          <image class="image_tupian_1" src="../../static/mingxi.png"></image>
          <text class='text_2'>设置</text>
          <image class="image-jiantou" src="../../static/to.png"></image>
        </view>

      </view>


      <!--        <virtual-list :data="data">-->
<!--            <template #row="{data}">-->
<!--                {{data.id}}-->
<!--            </template>-->
<!--        </virtual-list>-->

    </layout>
</template>
