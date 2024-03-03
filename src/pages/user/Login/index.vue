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
            http.ActionController.weappOpenid(res.code).then((res) => {
                http.login({
                    'wx-openid': res.data.payload.openid,
                    'key': res.data.payload.key
                }).then(res => {
                    uni.hideLoading()
                    uni.switchTab({
                        url: from
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

