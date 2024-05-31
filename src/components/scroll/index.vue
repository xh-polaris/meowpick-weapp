<style scoped lang="scss" src="./style.scss" />
<script setup lang="ts">
type Props = {};
const props = defineProps<Props>();
const emit = defineEmits<{
    bottom;
}>();

function bottom() {
    emit('bottom');
}
</script>

<template>
    <scroll-view scroll-y @scrolltolower="bottom" style="height: 100%">
        <slot />
    </scroll-view>
</template>
