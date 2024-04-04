<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import {useCourse} from "./index";

let course_id = ''
const {fetch, id, course, teachers, trends} = useCourse()
onLoad((options: any) => {
    course_id = options.id
})
onShow(() => {
    fetch(course_id)
})

function handleBottom() {
    PubSub.publish("comment-next")
}

function notifyCourse() {
    PubSub.publish("comment-open")
}

function jump2score(code: number) {
    if (code == 0 && self_want.value) {
        return
    }
    uni.navigateTo({
        url: `/pages/course/comment/index?id=${id.value}&code=${code}`
    })
}

const self_learn = computed(() => {
    let histories = course.value.notes?.histories ?? [];
    let history = histories[0];

    return (history?.enums ?? '') == 'end'
})
const self_want = computed(() => {
    let histories = course.value.notes?.histories ?? [];
    let history = histories[0];

    console.log(history)

    return (history?.enums ?? '') == 'start'
})
const step = computed(() => (course.value.notes?.histories ?? [])[0])

function format(time: string) {
    return useTime(parseInt(time))
}
</script>

<template>
    <layout :color="'linear-gradient(to bottom right, #A39688, #7F746A)'" @onBottom="handleBottom">
        <div class="course-box">
            <div>
                <div class="info">
                    <course-header :data="course.data"/>
                    <div class="action" v-if="!self_learn">
                        <div class="action_btn" :class="{active: self_want}" @click="jump2score(0)">
                            <span v-if="self_want">
                                已想学
                            </span>
                            <span v-else>
                                想学
                            </span>
                        </div>
                        <div class="action_btn" @click="jump2score(1)">
                            学过
                        </div>
                    </div>
                    <div class="action-show" v-else>
                        <div class="action-score">
                            <span style="color: white">已学过</span>
                            <nut-rate size="11" spacing="0" v-model="course.notes!.score" active-color="orange" void-color="#ccc" allow-half readonly/>
                        </div>
                        <div class="time">
                            {{ format(step.crateAt!) }}
                        </div>
                    </div>
                </div>
                <div class="score">
                    <div class="score-number">
                        {{ course.score?.total }} 人评分
                    </div>
                    <div class="star">
                        <Star :score="course.score" v-if="course.score?.total! > 0"/>
                        <div class="no-score" v-else>暂无评分</div>
                    </div>
                    <div class="line"/>
                    <div class="tips">
                        <div class="tips-label">{{ course.learn_cnt }}人学过</div>
                        <div class="tips-label">{{ course.want_cnt }}人想学</div>
                    </div>
                </div>
<!--                <div class="intro">-->
<!--                    <div class="title">-->
<!--                        课程简介-->
<!--                    </div>-->
<!--                    <div class="content">-->
<!--                        {{ course.data?.describe }}-->
<!--                    </div>-->
<!--                </div>-->
                <div class="teacher">
                    <div class="title">
                        任课教师
                    </div>
                    <div class="teacher-list">
                        <course-teacher-list :teachers="teachers"/>
                    </div>
                </div>
            </div>

            <div class="trend">
                <ul>
                    <li class="course-li" v-for="item in trends" @click="">
                        <choose-course :data="item"/>
                    </li>
                </ul>
            </div>

            <div class="new-box" @click="notifyCourse">
                +
            </div>
        </div>
        <div class="course_bottom">
            <div>
                <div>
                    课评
                </div>
            </div>
            <div>
                <course-comment-list :id="id"/>
            </div>
        </div>
    </layout>
</template>

