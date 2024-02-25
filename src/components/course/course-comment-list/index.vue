<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
const props = defineProps<{
    id: string
}>()

let list = computed(() => useCourseComment(props.id))
// watch(props, () => {
//     list = useCourseComment(props.id)
// })
</script>

<template>
    <div class="index">
        <div class="new-comment">
            +{{ id }}
        </div>
        <ul>
        </ul>
    </div>
</template>

