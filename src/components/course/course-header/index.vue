<template>
    <view class="info-wrapper">
        <view class="msg">
            <view class="top">
                <view class="type">
                    <text class="tip">课程类别</text>
                    <text class="content">{{ data.category }}</text>
                </view>
                <view class="department">
                    <text class="tip">开设院系</text>
                    <text class="content">{{ data.department }}</text>
                </view>
            </view>
            <view class="bottom">
                <view class="teacher">
                    <text class="tip">任课教师</text>
                    <view class="teachers" v-for="item of teachers">
                        <view class="content">{{ item.name }}</view>
                    </view>
                </view>
                <view class="campus">
                    <text class="tip">开设校区</text>
                    <text class="content">{{ render_des(data.campuses) }}</text>
                </view>
            </view>
        </view>
    </view>
</template>
<script setup lang="ts">
import type { CourseVO, TeacherVO } from '@/api/data-contracts';

type Props = {
    data: CourseVO;
    teachers: TeacherVO[];
};
const props = defineProps<Props>();

function render_des(ls: any[]): string {
    return ls.join(' , ');
}
</script>

<style scoped lang="scss">
.msg {
    display: flex;
    flex-direction: column;
    margin-top: 10vw;
    .top {
        display: flex;
        flex-direction: row;
        margin-left: 20vw;
        .type {
            display: flex;
            flex-direction: column;
            max-width: 15vw;
            .tip {
                color: #181818;
                font-size: 3.5vw;
            }
            .content {
                font-weight: bold;
                margin-top: 5vw;
            }
        }
        .department {
            margin-left: 30vw;
            display: flex;
            flex-direction: column;
            .tip {
                color: #181818;
                font-size: 3.5vw;
            }
            .content {
                font-weight: bold;
                margin-top: 5vw;
            }
        }
    }
    .bottom {
        display: flex;
        flex-direction: row;
        margin-left: 20vw;
        margin-top: 10vw;
        .teacher {
            display: flex;
            flex-direction: column;
            max-width: 15vw;
            .tip {
                color: #181818;
                font-size: 3.5vw;
            }
            .content {
                font-weight: bold;
                margin-top: 5vw;
                width: 18.5vw;
            }
        }
        .campus {
            margin-left: 30vw;
            display: flex;
            flex-direction: column;
            .tip {
                color: #181818;
                font-size: 3.5vw;
            }
            .content {
                font-weight: bold;
                margin-top: 5vw;
            }
        }
    }
}
</style>
