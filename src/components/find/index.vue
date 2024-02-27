<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import InPut from "./index";

const props = defineProps<{}>()

const input = reactive(new InPut())
onMounted(() => {
    input.init()
})

const emit = defineEmits(['confirm'])
function notify() {
    emit('confirm', input.query())
}
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
                   @confirm="notify">
        </div>

    </div>
</template>
