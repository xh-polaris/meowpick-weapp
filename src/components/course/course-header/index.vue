<template>
    <view class="info-wrapper">
        <view class="msg">
            <view class="top">
                <view class="type">
                    <view class="title">
                        <image src="/src/images/category-icon.png" class="icon"></image>
                        <text class="tip">课程类别</text>
                    </view>
                    <text class="content">{{ data.category }}</text>
                </view>
                <view class="department">
                    <view class="title">
                        <image src="/src/images/depart-icon.png" class="icon"></image>
                        <text class="tip">开课院系</text>
                    </view>
                    <text class="content">{{ data.department }}</text>
                </view>
            </view>
            <view class="bottom">
                <view class="teacher">
                    <view class="title">
                        <image src="/src/images/teacher-icon.png" class="icon"></image>
                        <text class="tip">任课教师</text>
                    </view>
                    <view class="teachers" v-for="item of teachers">
                        <view class="content">{{ item.name }}</view>
                    </view>
                </view>
                <view class="campus">
                    <view class="title">
                        <image src="/src/images/campus-icon.png" class="icon"></image>
                        <text class="tip">开设校区</text>
                    </view>
                    <text class="content">{{ getCampus(data.campuses) }}</text>
                </view>
            </view>
            <view class="link">
                <view class="title">
                    <image src="/src/images/link-icon.png" class="icon"></image>
                    <text class="tip">相关课程</text>
                </view>
                <view class="class-link" v-for="item of data.link" @click="jump(item[0])">
                    <view class="content">{{ item[1] }}</view>
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
const jump = (id: string) => {
    uni.navigateTo({
        url: `/pages/course/index/index?id=${id}`
    });
};

const getCampus = (campuses: string[]) => {
    const hasZhongbei = campuses.includes('中山北路校区');
    const hasMinhang = campuses.includes('闵行校区');

    if (hasZhongbei && hasMinhang) {
        return '中北&闵行';
    } else if (hasZhongbei) {
        return '中北校区';
    } else if (hasMinhang) {
        return '闵行校区';
    } else {
        return '没有找到相关校区';
    }
};
</script>

<style scoped lang="scss">
.msg {
    display: flex;
    flex-direction: column;
    margin-top: 10vw;
    .top {
        display: flex;
        flex-direction: row;
        margin-left: 12vw;
        .type {
            display: flex;
            flex-direction: column;
            max-width: 25vw;
            .title {
                display: flex;
                flex-direction: row;
                .icon {
                    width: 6vw;
                    height: 6vw;
                }
                .tip {
                    color: #181818;
                    font-size: 3.5vw;
                    margin-left: 2vw;
                }
            }
            .content {
                font-weight: bold;
                margin-top: 3vw;
                font-size: 3.8vw;
                margin-left: 7vw;
            }
        }
        .department {
            margin-left: 25vw;
            display: flex;
            flex-direction: column;
            .title {
                display: flex;
                flex-direction: row;
                .icon {
                    width: 6vw;
                    height: 6vw;
                }
                .tip {
                    color: #181818;
                    font-size: 3.5vw;
                    margin-left: 2vw;
                }
            }
            .content {
                font-weight: bold;
                margin-top: 3vw;
                font-size: 3.8vw;
                margin-left: 7vw;
            }
        }
    }
    .bottom {
        display: flex;
        flex-direction: row;
        margin-left: 12vw;
        margin-top: 10vw;
        .teacher {
            display: flex;
            flex-direction: column;
            max-width: 25vw;
            .title {
                display: flex;
                flex-direction: row;
                .icon {
                    width: 6vw;
                    height: 6vw;
                }
                .tip {
                    color: #181818;
                    font-size: 3.5vw;
                    margin-left: 2vw;
                    margin-top: 0.6vw;
                }
            }
            .content {
                font-weight: bold;
                margin-top: 3vw;
                font-size: 3.8vw;
                width: 18.5vw;
                margin-left: 7vw;
            }
        }
        .campus {
            margin-left: 23vw;
            display: flex;
            flex-direction: column;
            .title {
                display: flex;
                flex-direction: row;
                .icon {
                    width: 6vw;
                    height: 5.5vw;
                }
                .tip {
                    color: #181818;
                    font-size: 3.5vw;
                    margin-left: 1vw;
                }
            }
            .content {
                font-weight: bold;
                font-size: 3.8vw;
                margin-top: 3vw;
                margin-left: 7vw;
            }
        }
    }
    .link {
        margin-left: 12vw;
        margin-top: 5vw;
        display: flex;
        flex-direction: column;
        .title {
            display: flex;
            flex-direction: row;
            .icon {
                width: 6vw;
                height: 6vw;
            }
            .tip {
                color: #181818;
                font-size: 3.5vw;
                margin-left: 2vw;
                margin-top: 0.6vw;
            }
        }
        .class-link {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-left: 7vw;
            .content {
                background-color: #e9e9e9;
                margin-top: 1vw;
                border-radius: 2vw;
                padding: 1.5vw;
                font-size: 3.3vw;
            }
        }
    }
}
</style>
