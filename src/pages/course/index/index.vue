<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import {useCourse} from "./index";

const {fetch, id, course, score, teachers} = useCourse()
onLoad((options: { id: string }) => {
    fetch(options.id)
})

function render_des(ls: any[]): string {
    return ls.join(' / ')
}
</script>

<template>
    <layout :color="'#F2F0ED'">
        <div class="course-box">
            <div>
                <div class="info">
                    <div class="info-wrapper">
                        <div class="img">
<!--                            <img v-if="item.avatar != 'avatar'" :src="item.avatar" alt="">-->
                            <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)" >{{course.data.name[0]}}</nut-avatar>
                        </div>
                        <div class="msg">
                            <div class="title">
                                {{ course.data.name }}
                            </div>
                            <div class="des">
                                {{render_des([course.data.point, course.data.category, course.data.campuses]) }}
                            </div>

                        </div>
                    </div>
                    <div class="action">
                        <!--                        btn-->
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
                    <course-comment-list :id="id"/>
                </div>
            </div>
        </div>
    </layout>
</template>

