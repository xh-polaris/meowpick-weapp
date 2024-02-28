<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import type {CourseVO} from "@/api/data-contracts";

type Props = {
    data: CourseVO,
    showTeacher: boolean
}
const props = defineProps<Props>()

function render_des(ls: any[]): string {
    return ls.join(' / ')
}
</script>

<template>
    <div class="index">
        <div class="info-wrapper">
            <div class="img">
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">{{ data.name[0] }}</nut-avatar>
                </div>
            </div>
            <div class="msg">
                <div class="title">
                    {{ data.name }}
                </div>
                <div class="des">
                    {{ render_des([data.point, data.category, data.campuses]) }}
                </div>
                <div>
                    <!--                    {{data}}-->
                </div>
                <div v-if="showTeacher">
                    <ul>
                        <li v-for="item in data.teachers">
                            {{item}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

