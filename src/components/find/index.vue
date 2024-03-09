<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import {useInput} from "./index";

const props = defineProps<{
    keyword: string
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

}

PubSub.subscribe("commit_input", (value) => {
    searchText.value = value
})
</script>

<template>
    <div class="wrapper">
        <!--        -->
        <div class="input-box">
            <div class="icon" @click="notify">
                🔎
            </div>
            <input v-model="searchText" class="search-text" :placeholder="placeHolder"
                   @input="suggest"
                   @confirm="notify">
        </div>

    </div>
</template>
