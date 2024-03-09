<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import type {TeacherVO} from "@/api/data-contracts";

type Props = {
    teachers: TeacherVO[]
}
const props = defineProps<Props>()


</script>

<template>
    <div class="index">
        <div class="box" v-if="teachers.length != 0">
            <div class="item"
                 v-for="item in teachers"
                 @click="console.log(item.id)"
            >
                <div class="img">
                    <img :src="item.avatar" alt="">
                </div>
                <div class="info">
                    <div class="name">{{ item.name }}</div>
                    <div class="position">{{ item.position }}</div>
                </div>
            </div>
        </div>
        <div v-else>
            暂无任课教师
        </div>
    </div>
</template>

