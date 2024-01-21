<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
onShow(() => {
    const curPages: any = getCurrentPages()[0];  // 获取当前页面实例
    if (typeof curPages.getTabBar === 'function' && curPages.getTabBar()) {
        curPages.getTabBar().setData({
            active: 0   // 表示当前菜单的索引，该值在不同的页面表示不同
        });
    }
})

uni.switchTab({
    url: "/pages/find/index/index"
})
</script>

<template>
    <div>
        发帖按钮
    </div>
    <div>
        帖子列表
    </div>
</template>
