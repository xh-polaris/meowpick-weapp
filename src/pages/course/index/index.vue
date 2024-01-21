<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import {useCourse} from "./index";

const course = useCourse()
onLoad((options: { id: string }) => {
    course.setId(options.id)
})

</script>

<template>
    <layout :color="'#F2F0ED'">
        <div class="course-box">
            <div>
                <div class="info">
                    <div class="info-wrapper">
                        <div class="img">img</div>
                        <div class="msg">
                            <div class="title">
                                {{ course.data.name }}
                            </div>
                            <div class="des">
                                {{ course.data.point }}
                                {{ course.data.category }}
                                {{ course.data.campuses }}
                            </div>

                        </div>
                    </div>
                    <div class="action">
                        <div class="action-btn" @click="course.learn">
                            i 学过
                        </div>
                        <div class="action-btn" @click="course.want">
                            i 想选
                        </div>
                    </div>
                </div>
                <div class="score">
                    <div class="title">
                        评分
                    </div>
                    <div class="star">

                    </div>
                    <div class="line"/>
                    <div class="tips">
                        <div class="tips-label">2901人学过</div>
                        <div class="tips-label">792人想选</div>
                    </div>
                </div>
                <div class="intro">
                    <div class="title">
                        课程介绍
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
                        {{ course.data.teachers }}
                    </div>
                </div>
                <!--                <div class="short-comment">-->
                <!--                    <div class="title">短评</div>-->
                <!--                </div>-->
                <!--                <div class="trend">-->
                <!--                    <div class="title">-->
                <!--                        选这门课的人也喜欢-->
                <!--                    </div>-->
                <!--                    <div class="list">-->

                <!--                    </div>-->
                <!--                </div>-->
            </div>
            <div>
                <div>
                    <div class="bg-red-200">
                        课评
                    </div>
                    <div>
                        讨论
                    </div>
                </div>
                <div>
                    list
                </div>
            </div>
        </div>
    </layout>
</template>

