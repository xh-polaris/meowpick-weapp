<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import {useComment} from "@/pages/course/comment/index";

type Props = {}
const props = defineProps<Props>()

const id = ref('')

onLoad((options: { id: string, code: string }) => {
    code.value = options.code
    id.value = options.id
})

const {title, text, score, commit, tags, code} = useComment(id)

function clear() {
    title.value = ''
}

function close(tag: string) {
    tags.value = tags.value.filter(i => i != tag)
}

const areaShow = ref(false)
const areaTxt = ref('')

function cancel() {
    areaShow.value = false
    areaTxt.value = ''
}

function confirm() {
    if (tags.value.includes(areaTxt.value)) {
        areaShow.value = false
        areaTxt.value = ''
        return;
    }
    tags.value.push(areaTxt.value)
    areaShow.value = false
    areaTxt.value = ''
}
</script>

<template>
    <modal v-if="areaShow" title="新增空间" confirm-text="保存" cancel-text="取消" @cancel="cancel"
           @confirm="confirm">
        <input type="text" v-model="areaTxt" placeholder="标签" maxlength="5"/>
    </modal>
    <div class="index">
        <nut-collapse>
            <nut-collapse-item title="为课程打标签">
                <div class="tags">
                    <div class="add_tag" @click="areaShow = true" v-show="tags.length < 3">
                        +新标签
                    </div>
                    <div class="tag_list">
                        <div class="tag" v-for="tag in tags">
                            <nut-tag color="#FA2400" plain closeable @close="close(tag)">
                                {{ tag }}
                            </nut-tag>
                        </div>
                    </div>
                </div>
            </nut-collapse-item>
        </nut-collapse>
        <div class="score">
            <div class="title">
                为课程评分
            </div>
            <div class="rate">
                <nut-rate v-model="score" active-color="orange" size="25" spacing="25"/>
            </div>
        </div>
        <div>
            <nut-input v-model="title" clearable placeholder="可添加标题" @clear="clear"/>
        </div>
        <div>
            <nut-textarea v-model="text" placeholder="写几句评价…"/>
        </div>
        <div class="button">
            <nut-button type="success" color="#67C23A" @click="commit" :disabled="text.length == 0">发布</nut-button>
        </div>
    </div>
</template>

