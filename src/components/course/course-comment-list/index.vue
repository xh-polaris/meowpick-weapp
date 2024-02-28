<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import dayjs from "dayjs";

const props = defineProps<{
    id: string
}>()

const {list, like, next, fetch, page} = useCourseComment(props)
const show = ref(false)

function format(time: string): string {
    return dayjs(time).format()
}

function onComment() {
    page.value = 0
    list.value = {}
    fetch(props.id, page.value);
    show.value = false
}

</script>

<template>
    <div class="index">
        <nut-popup v-model:visible="show" position="bottom" round>
            <course-comment :id="id" @commit="onComment"/>
        </nut-popup>

        <div class="new-box">
            <div class="new-comment" @click="show = true">
                +
            </div>
        </div>
        <ul>
            <li v-for="item in list" :key="item.id">
                <div class="item">
                    <header class="header">
                        <div class="avatar">
                            <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">{{ item.uid[0] }}
                            </nut-avatar>
                        </div>
                        <div class="user-time">
                            <div class="name">name</div>
                            <span class="span">·</span>
                            <span class="span">{{ format(item.crateAt) }}</span>
                        </div>
                    </header>
                    <div class="body">
                        {{ item.text }}
                    </div>
                    <footer class="info">
                        <div class="info-item" @click="like(item.id!)">
                            <div :class="item.relation?.like? 'active':''">
                                i
                            </div>
                            <div>{{ item.relation?.like_cnt }}</div>
                        </div>
                    </footer>
                </div>
            </li>
        </ul>
    </div>
</template>

