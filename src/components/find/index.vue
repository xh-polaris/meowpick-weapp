<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import {useInput} from "./index";

const props = defineProps<{
    keyword: string
}>()
const emit = defineEmits<{
    onKeydown: string
}>()
const ref = toRefs(props)
const {
    searchText, placeHolder, list, searchHistory,
    text
} = useInput(ref)

function notify() {
    emit('onKeydown', text.value)
}

function suggest() {

}

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
