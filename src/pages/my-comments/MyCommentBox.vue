<template>
    <view class="my-comment-box">
        <view class="comment-box">
            <view class="title">
                <view class="name"> name </view>
                <view class="dept-name">dept-name</view>
            </view>
            <view class="information">
                <view class="circle"></view>
                <view class="department">department</view>
                <view class="circle"></view>
                <view class="instructor">instructor</view>
            </view>
            <view class="tag">
                <view class="item" v-for="item of props.data.tags">
                    <image :src="Emoji(item)" class="emoji"></image>
                    <text class="tag-txt">{{ item }}</text>
                </view>
            </view>
            <view class="content">{{ props.data.text }}</view>
            <view class="like">
                <image :src="data.relation?.like ? Liked : Like" class="like-icon" @click="like"></image>
                <view class="like-num">{{ props.data.relation?.like_cnt }}</view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { CommentVO } from '@/api/data-contracts';
import { Emoji } from '@/utils/tags';
import Liked from '@/images/like_active.png';
import Like from '@/images/like-icon.png';
type Props = {
    data: CommentVO;
};
const props = defineProps<Props>();

const emit = defineEmits<{
    like: (id: string) => void;
}>();

function like() {
    emit('like', props.data.id);
}
</script>

<style scoped lang="scss">
.my-comment-box {
    background-color: #b70030;
    width: 89vw;
    height: auto;
    margin-top: 5vw;
    border-radius: 3vw;
    .comment-box {
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        width: 87vw;
        height: auto;
        margin-left: 1vw;
        border-radius: 3vw;
        box-shadow: 4px 4px 16px 0px #0000001f;
        .title {
            display: flex;
            flex-direction: row;
            .name {
                margin-left: 4vw;
                margin-top: 4vw;
                font-size: 4vw;
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
                width: 2.13vw;
                height: 2.13vw;
                border-radius: 50%;
                background-color: #b70030;
                margin-left: 4vw;
                margin-top: 1.5vw;
            }
            .department {
                margin-left: 1.5vw;
            }
            .instructor {
                margin-left: 1.5vw;
            }
        }
        .tag {
            display: flex;
            flex-wrap: wrap;
            margin-top: 3vw;

            .item {
                background: #f1f1f1;
                display: flex;
                flex-direction: row;
                padding: 1vw;
                border-radius: 2vw;
                margin-left: 2vw;

                .emoji {
                    width: 6.4vw;
                    height: 6.4vw;
                }

                .tag-txt {
                    margin-top: 1vw;
                    margin-left: 1vw;
                }
            }
        }
        .content {
            margin-top: 3vw;
            width: 82.93vw;
            margin-left: 3.5vw;
            letter-spacing: 0.3vw;
            line-height: 1.5;
        }
        .like {
            display: flex;
            flex-direction: row;
            margin-left: 75vw;
            margin-top: 2vw;
            margin-bottom: 3vw;
            .like-icon {
                top: 5vw;
                width: 5.86vw;
                height: 5.86vw;
            }
            .like-num {
                top: 5.5vw;
                margin-left: 2vw;
                margin-top: 1vw;
            }
        }
    }
}
</style>
