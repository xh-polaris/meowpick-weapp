<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
onShow(() => {
    const curPages: any = getCurrentPages()[0];  // 获取当前页面实例
    if (typeof curPages.getTabBar === 'function' && curPages.getTabBar()) {
        curPages.getTabBar().setData({
            active: 2   // 表示当前菜单的索引，该值在不同的页面表示不同
        });
    }
})
</script>

<template>
    <layout>
        <div class="content">
            <div class="find ">
                <find></find>
            </div>
            <div class="category">
                <course-category></course-category>
            </div>
            <div id="recommend">

            </div>
        </div>
    </layout>
</template>