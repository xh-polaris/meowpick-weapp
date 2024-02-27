<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import {useChoose} from './index'

// const choose = reactive(new Choose())
const {type, keyword, jump, rows} = useChoose()
onLoad((options: { keyword: string }) => {
    keyword.value = options.keyword
})
// onMounted(() => {
//     choose.init()
// })
</script>

<template>
    <layout>
        <div>
            <find/>
        </div>
        <div class="wrapper">
            <div>
                <nut-tabs v-model="type" swipeable type="smile">
                    <nut-tab-pane title="课程" pane-key="course"> Content 1 </nut-tab-pane>
                    <nut-tab-pane title="教师" pane-key="teacher" disabled>  </nut-tab-pane>
                    <nut-tab-pane title="小组" pane-key="group" disabled>  </nut-tab-pane>
                    <nut-tab-pane title="话题" pane-key="post" disabled>  </nut-tab-pane>
                    <nut-tab-pane title="用户" pane-key="user" disabled>  </nut-tab-pane>
                </nut-tabs>
            </div>
            <div>
                <ul>
                    <li v-for="item in rows.course" @click="jump(item.id!)">
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
    </layout>
</template>

