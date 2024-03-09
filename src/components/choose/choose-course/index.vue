<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import type {CourseVO} from "@/api/data-contracts";

type Props = {
    data: CourseVO
}
const props = defineProps<Props>()

const emit = defineEmits<{}>()

const rate = ref(3)
</script>

<template>
    <div class="index">
        <div class="imgs">
            <div class="page-photo">

            </div>
            <div class="course-time">

            </div>
        </div>
        <div class="header">
            <div class="name">
                {{ data.name }}
            </div>
            <div class="score">
                <div class="rate">
                    <nut-rate size="11" spacing="0" v-model="rate" active-color="orange" allow-half readonly/>
                </div>
                <div class="num">6.1</div>
            </div>
            <div class="desc">
                {{}}
            </div>
        </div>
        <div class="infos">
            <nut-cell>
                <nut-ellipsis :content="data.describe" direction="end" expand-text="展开" collapse-text="收起" rows="3" symbol="…"/>
            </nut-cell>
        </div>
    </div>
</template>

