<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import {useInput} from "./index";

const props = defineProps<{
}>()
const emit = defineEmits<{
    onKeydown: string
}>()

const {
    searchText, placeHolder, list, searchHistory,
    text
} = useInput()

function notify() {
    emit('onKeydown', text.value)
}

function suggest() {
    console.log(text.value)
}

</script>

<template>
    <div class="wrapper">
        <!--        -->
        <div class="input-box">
            <div class="icon" @click="notify">
                icon
            </div>
            <input v-model="searchText" class="search-text" :placeholder="placeHolder"
                   @input="suggest"
                   @confirm="notify">
        </div>

    </div>
</template>
