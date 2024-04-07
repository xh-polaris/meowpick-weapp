<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
type Props = {}
const props = defineProps<Props>()

let from = ''
onLoad((options: { url: string }) => {
    from = options.url
})

function click() {
    uni.showLoading({
        title: '登录中'
    })
    uni.login({
        success: res => {
            http.sign_in({
                "authId": "wxdffc445bde3313aa",
                "authType": "wechat",
                "verifyCode": res.code,
                "appId": 100
            }).then(rse => {
                uni.hideLoading()
                uni.switchTab({
                    url: from
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

