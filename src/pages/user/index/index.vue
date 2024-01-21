<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
onShow(() => {
    const curPages: any = getCurrentPages()[0] // 获取当前页面实例
    if (typeof curPages.getTabBar === 'function' && curPages.getTabBar()) {
        curPages.getTabBar().setData({
            active: 4, // 表示当前菜单的索引，该值在不同的页面表示不同
        })
    }
})

const data = [
    {id: '0'},
    {id: '1'},

]
</script>

<template>
    <layout>
        <virtual-list :data="data">
            <template #row="{data}">
                {{data.id}}
            </template>
        </virtual-list>
    </layout>
</template>
