<script setup lang="ts">
onShow(() => {
    const curPages: any = getCurrentPages()[0];  // 获取当前页面实例
    if (typeof curPages.getTabBar === 'function' && curPages.getTabBar()) {
        curPages.getTabBar().setData({
            active: 1   // 表示当前菜单的索引，该值在不同的页面表示不同
        });
    }
})
</script>

<template>
    <div>
        添加社群 [认证]
    </div>
    <div>
        我的社群列表
    </div>
    <div>
        聊天室，频道
    </div>
</template>

<style scoped>

</style>