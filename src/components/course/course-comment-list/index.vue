<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
const props = defineProps<{
    id: string
}>()

const {list, like, next} = useCourseComment(props)
</script>

<template>
    <div class="index">
        <div class="new-comment" @click="next">
            +{{ id }}
        </div>
        <ul>
            {{ list }}
            <li v-for="item in list">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

