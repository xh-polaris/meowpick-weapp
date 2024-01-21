<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts" generic="T extends {id : string}">
const props = defineProps<{
    data: T[]
}>()

const render = computed(() => props.data)

</script>

<template>
    <div class="virtual-wrapper">
        <ul class="box">
            <li class="virtual-item" v-for="(item, index) in render" :key="item.id">
                <slot name="row" :data="item" />
            </li>
        </ul>
    </div>
</template>

