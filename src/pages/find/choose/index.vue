<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import {useChoose} from './index'

// const choose = reactive(new Choose())
const {type, keyword, jump, rows, page} = useChoose()
onLoad((options: { keyword: string }) => {
    keyword.value = options.keyword
})

function handleInputChange(input: string) {
    keyword.value = input
}

function handleScrollBottom() {
    page.value++
}

</script>

<template>
    <layout :color="'#F2F0ED'">
        <div class="box">
            <div class="find">
                <find @onKeydown="handleInputChange" :keyword="keyword"/>
            </div>
            <div class="wrapper">
                <div>
                    <nut-tabs v-model="type" swipeable type="smile" auto-height>
                        <nut-tab-pane title="课程" pane-key="course">
                            <div class="container">
                                <scroll @bottom="handleScrollBottom">
                                    <ul>
                                        <li v-for="item in rows.course"
                                            @click="jump(item.id!)">
                                            <course-item :data="item" show-teacher/>
                                        </li>
                                    </ul>
                                </scroll>
                            </div>
                        </nut-tab-pane>
                        <nut-tab-pane title="教师" pane-key="teacher" disabled></nut-tab-pane>
                        <nut-tab-pane title="小组" pane-key="group" disabled></nut-tab-pane>
                        <nut-tab-pane title="话题" pane-key="post" disabled></nut-tab-pane>
                        <nut-tab-pane title="用户" pane-key="user" disabled></nut-tab-pane>
                    </nut-tabs>
                </div>
            </div>
        </div>
    </layout>
</template>

