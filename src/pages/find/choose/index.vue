<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import {useChoose} from './index'

// const choose = reactive(new Choose())
const {type, keyword, jump, rows, page} = useChoose()
onLoad((options: any) => {
    keyword.value = options.keyword
    PubSub.publish('commit_input', options.keyword)
})

function handleInputChange(input: string) {
    keyword.value = input
}

function handleScrollBottom() {
    page.value++
}

</script>

<template>
    <layout>
        <div class="box">
            <div class="find">
                <find @onKeydown="handleInputChange"/>
            </div>
            <div class="wrapper">
                <div>
                    <div class="container course-container">
                        <scroll @bottom="handleScrollBottom">
                            <ul>
                                <li class="course-li" v-for="item in rows.course" @click="jump(item.data?.id!)">
                                    <choose-course :data="item"/>
                                </li>
                            </ul>
                        </scroll>
                    </div>
<!--                    <nut-tabs v-model="type" swipeable type="smile" auto-height>-->
<!--                        <nut-tab-pane title="课程" pane-key="course">-->
<!--                            -->
<!--                        </nut-tab-pane>-->
<!--                        <nut-tab-pane title="教师" pane-key="teacher" disabled></nut-tab-pane>-->
<!--                        <nut-tab-pane title="小组" pane-key="group" disabled></nut-tab-pane>-->
<!--                        <nut-tab-pane title="话题" pane-key="post" disabled></nut-tab-pane>-->
<!--                        <nut-tab-pane title="用户" pane-key="user" disabled></nut-tab-pane>-->
<!--                    </nut-tabs>-->
                </div>
            </div>
        </div>
    </layout>
</template>

