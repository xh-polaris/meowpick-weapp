<script setup lang="ts">
onLaunch(() => {
    uni.getSystemInfo().then(res => {
        console.log(res)
    })
    uni.addInterceptor('navigateTo', {
        invoke(e: { url: string }) {
            useRouteStore().setUrl(e.url)
        }
    })
});
onShow(() => {
});
onHide(() => {
});
</script>
<style lang="scss">
page {
    width: 100%;
    height: 100%;
}

view {
    box-sizing: border-box;
}

input {
    box-sizing: border-box;
}
</style>