<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
type Props = {
    id: string
}
const props = defineProps<Props>()
const emit = defineEmits<{
    commit
}>()

const text = ref('')

function commit() {
    http.CommentController.add({
        target: props.id,
        text: text.value
    }).then(() => {
        emit("commit")
    })
}
</script>

<template>
    <div class="index">
        <div>
            <nut-textarea v-model="text" placeholder="写回复"/>
        </div>
        <div class="footer">
            <div>

            </div>
            <div>
                <nut-button type="success" @click="commit" :disabled="text.length == 0">发布</nut-button>
            </div>
        </div>
    </div>
</template>

