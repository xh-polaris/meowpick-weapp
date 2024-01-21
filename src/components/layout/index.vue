<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
let bottom = computed(() => [
    '',
    '/pages/index/index/index',
    '/pages/group/index/index',
    '/pages/find/index/index',
    '/pages/message/index/index',
    '/pages/user/index/index',
].includes(useRouteStore().url.trim()))
const props = defineProps({
    color: {type: String, default: "#fff"}
})

</script>
<template>
    <div class="root" :style="{
        backgroundColor: `${color}`,
        minHeight: `calc(100vh - env(safe-area-inset-bottom) - ${bottom?50:0}px)`,
        maxHeight: `calc(100vh - env(safe-area-inset-bottom) - ${bottom?50:0}px)`}">
        <slot/>
    </div>
</template>

