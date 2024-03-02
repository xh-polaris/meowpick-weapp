<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
type Props = {}
const props = defineProps<Props>()

function LoginDL() {
    // 传用户名和信息的接口
    uni.getUserProfile({ //获取微信信息
        desc: '用于获取您的个人信息', // 声明获取用户个人信息后的用途，不超过30个字符
        success: res1 => {  //接口调用成功的回调
            console.log(res1);
        }
    })
}

function login() {
    uni.getUserProfile({
        desc: '你的授权信息',
        success: (res) => {
            console.log(res)
        },
        fail: (res) => {
            return uni.$showMsg('您取消了登录授权')
        }
    })//在methods节点中定义login
}

function click() {
//漫路h
    uni.showLoading({
        title: '登录中'
    })
    uni.login({
        success: res => {
            http.ActionController.weappOpenid(res.code).then((res) => {
                http.login({
                    'wx-openid': res.data.payload.openid,
                    'key': res.data.payload.key
                }).then(res => {
                    uni.hideLoading()
                    uni.switchTab({
                        url: uni.getStorageSync('URL')
                    })
                })
            })
        }
    });

}
</script>

<template>
    <div class="index">
        <button open-type="getUserInfo" @click="click">点击获取头像信息</button>
    </div>
</template>

