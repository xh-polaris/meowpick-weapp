<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import {useCourse} from "./index";

let course_id = ''
const {fetch, id, course, score, teachers} = useCourse()
onLoad((options: { id: string }) => {
    course_id = options.id
})
onShow(() => {
    console.log(course_id)
    fetch(course_id)
})

function handleBottom() {
    PubSub.publish("comment-next")
}

function notifyCourse() {
    PubSub.publish("comment-open")
}

function jump2score(code: number) {
    uni.navigateTo({
        url: `/pages/course/comment/index?id=${id.value}&code=${code}`
    })
}
</script>

<template>
    <layout :color="'#F2F0ED'" @onBottom="handleBottom">
        <div class="course-box">
            <div class="new-box" @click="notifyCourse">
                +
            </div>
            <div>
                <div class="info">
                    <course-item :data="course.data"/>
                    <div class="action">
                        <div class="action_btn" @click="jump2score(0)">
                            想学
                        </div>
                        <div class="action_btn" @click="jump2score(1)">
                            学过
                        </div>
                    </div>
                </div>
                <div class="score">
                    <div class="title">
                        评分 ({{ score.length }}人)
                    </div>
                    <div class="star">
                        <Star :score="score" v-if="score.length"/>
                        <div class="no-score" v-else>暂无评分</div>
                    </div>
                    <div class="line"/>
                    <div class="tips">
                        <div class="tips-label">{{ course.leaned }}人学过</div>
                        <div class="tips-label">{{ course.wanted }}人想选</div>
                    </div>
                </div>
                <div class="intro">
                    <div class="title">
                        课程简介
                    </div>
                    <div class="content">
                        {{ course.data.describe }}
                    </div>
                </div>
                <div class="teacher">
                    <div class="title">
                        任课教师
                    </div>
                    <div class="teacher-list">
                        <course-teacher-list :teachers="teachers"/>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        课评
                    </div>
                </div>
                <div>
                    <course-comment-list :id="id" :show="show"/>
                </div>
            </div>
        </div>
    </layout>
</template>

