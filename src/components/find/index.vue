<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import InPut from "./index";

const props = defineProps<{}>()

const input = reactive(new InPut())
onMounted(() => {
    input.init()
})

// const placeHolder = computed(() => input.searchText === '' ? input.placeHolder : input.searchText)

</script>

<template>
    <div class="wrapper">
        <!--        -->
        <div class="input-box">
            <div class="icon" @click="input.query">
                icon
            </div>
            <input v-model="input.searchText" class="search-text" :placeholder="input.placeHolder"
                   @input="input.suggest"
                   @confirm="input.query">
        </div>
        <div class="recent">
            <div class="title">
                最近搜索
            </div>
            <div class="user-list">
                用户{{ input.searchText }}
            </div>
            <div class="text">
                词条
                {{ input.list }}
            </div>
        </div>
    </div>
</template>
