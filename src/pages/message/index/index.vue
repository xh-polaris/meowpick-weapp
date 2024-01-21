<script setup lang="ts">
onShow(() => {
    const curPages: any = getCurrentPages()[0];  // 获取当前页面实例
    if (typeof curPages.getTabBar === 'function' && curPages.getTabBar()) {
        curPages.getTabBar().setData({
            active: 3   // 表示当前菜单的索引，该值在不同的页面表示不同
        });
    }
})
</script>

<template>
message
</template>

<style scoped>

</style>