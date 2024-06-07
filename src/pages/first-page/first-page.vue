<template>
    <view></view>
</template>

<script setup lang="ts">
import { Init } from '@/utils/Init';
uni.showLoading({
    title: '初始化中'
});
onLaunch(() => {
    Init();
});
</script>

<style scoped></style>
