<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import type {Course} from "@/api/data-contracts";

type Props = {
    data: Course
}
const props = defineProps<Props>()

const emit = defineEmits<{}>()

const score = props.data.score?.avg ?? 0
function render_des(ls: any[]): string {
    return ls.join(' / ')
}
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
                {{ data?.data!.name }}
            </div>
            <div class="score">
                <div class="rate">
                    <nut-rate size="11" spacing="0" v-model="score" active-color="orange" void-color="#ccc" allow-half readonly/>
                </div>
                <div class="num" v-if="score != 0">
                    {{ parseFloat(data.score?.score!.toFixed(1) ?? '0') }}
                </div>
            </div>
            <div class="desc">
                {{ render_des([data?.data?.point, data?.data?.category, data?.data?.campuses]) }}
            </div>
        </div>
        <div class="infos">
            <nut-cell>
                <nut-ellipsis :content="data?.data!.describe" direction="end" expand-text="展开" collapse-text="收起"
                              rows="3" symbol="…"/>
            </nut-cell>
        </div>
    </div>
</template>

