<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import {useComment} from "@/pages/course/comment/index";

type Props = {}
const props = defineProps<Props>()

const id = ref('')
onLoad((options: { id: string }) => {
    console.log(options.id, 'add')
    id.value = options.id
})

const {title, text, commit} = useComment(id)

function clear() {
    title.value = ''
}
</script>

<template>
    <div class="index">
        <div>
            <nut-input v-model="title" clearable placeholder="可添加标题" @clear="clear" />
        </div>
        <div>
            <nut-textarea v-model="text" />
        </div>
        <div>
            <nut-button type="success" color="#67C23A" @click="commit">发布</nut-button>
        </div>
    </div>
</template>

