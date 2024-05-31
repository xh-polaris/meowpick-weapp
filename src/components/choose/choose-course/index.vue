<template>
    <div class="search-result-box">
        <!--        <div class="imgs">-->
        <!--            <div class="page-photo">-->

        <!--            </div>-->
        <!--            <div class="course-time">-->

        <!--            </div>-->
        <!--        </div>-->
        <div class="search-result">
            <view class="title">
                <view class="name">
                    {{ props.data.data?.name }}
                </view>
                <view class="dept-name">{{ props.data.data?.category }}</view>
            </view>
            <view class="information">
                <view class="circle"></view>
                <view class="department">{{ props.data.data?.department }}</view>
                <view class="circle"></view>
                <view class="instructor">{{ data?.teachers }}</view>
            </view>
            <view class="tip"></view>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Course } from '@/api/data-contracts';

type Props = {
    data: Course;
};
const props = defineProps<Props>();

function render_des(ls: any[]): string {
    return ls.join(' / ');
}
</script>

<style scoped lang="scss">
.search-result-box {
    background-color: #b70030;
    width: 89vw;
    height: 34.13vw;
    margin-top: 5vw;
    border-radius: 3vw;
    .search-result {
        background-color: #ffffff;
        width: 87vw;
        height: 34.13vw;
        margin-left: 1vw;
        border-radius: 3vw;
        box-shadow: 4px 4px 16px 0px #0000001f;
        .title {
            display: flex;
            flex-direction: row;
            .name {
                margin-left: 4vw;
                margin-top: 4vw;
                font-size: 3.8vw;
                font-weight: bold;
            }
            .dept-name {
                margin-left: 2.5vw;
                margin-top: 4.5vw;
                font-size: 3.2vw;
                color: #545454;
            }
        }
        .information {
            display: flex;
            flex-direction: row;
            margin-top: 3vw;
            .circle {
                width: 2vw;
                height: 2vw;
                border-radius: 50%;
                background-color: #b70030;
                margin-left: 4vw;
                margin-top: 1.5vw;
            }
            .department {
                margin-left: 1.5vw;
                font-size: 3.5vw;
            }
            .instructor {
                margin-left: 1.5vw;
            }
        }
    }
}
</style>
