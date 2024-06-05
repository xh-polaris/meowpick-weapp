<template>
    <web-view :src="props.url"></web-view>
</template>

<script setup lang="ts">
const props = defineProps<{
    url: string;
}>();
</script>

<style scoped lang="scss"></style>
