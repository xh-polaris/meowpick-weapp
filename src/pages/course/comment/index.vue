<template>
    <view class="top-bar">
        <view class="go-back" @click="goBack">
            <image src="../../..//images/go-back.png" class="icon"></image>
            <view class="txt">{{ course.data.name }}</view>
        </view>
    </view>
    <view class="ellipse"></view>
    <view class="title">课程吐槽</view>
    <view class="add-tag">
        <view class="tag-title">添加标签</view>
        <view class="tag-box-chosen">
            <view class="chosen-title">已选择</view>
            <view class="selected-box">
                <view class="tag-item" v-for="item of SelectedTags" @click="RemoveTags(item.text)">
                    <image :src="item.icon" class="emoji"></image>
                    <text class="tag-txt">{{ item.text }}</text>
                </view>
            </view>
        </view>
        <view class="tag-box">
            <view class="box-title">可选择</view>
            <view class="chosen-box">
                <view
                    class="tag-item"
                    v-for="item of TotalTags"
                    @click="AddTags(item.text)"
                    :style="{ backgroundColor: item.isSelected ? '#D3D3D3' : '#f1f1f1' }"
                >
                    <image :src="item.icon" class="emoji"></image>
                    <text class="tag-txt">{{ item.text }}</text>
                </view>
            </view>
        </view>
    </view>
    <view class="add-comment">
        <view class="comment-title">添加吐槽</view>
        <view class="comment-box">
            <textarea
                placeholder="请客观评价，不得发表涉及广告、时政、色情、辱骂、违法犯罪、欺诈等违规内容"
                class="content-text"
                v-model="text"
            ></textarea>
        </view>
    </view>
    <view class="comment-button">
        <text class="content" @click="commit" :disabled="text.length == 0">吐槽</text>
    </view>
</template>
<script setup lang="ts">
import { useComment } from '@/pages/course/comment/index';
import { useCourse } from '@/pages/course/index/index';
import { InitTags } from '@/utils/tags';
import { TotalTags } from '@/utils/tags';
import { Tags } from '@/utils/tags';

type Props = {};
const props = defineProps<Props>();

let course_id = '';
const { fetch, id, course, teachers, trends } = useCourse();
const { text, commit, tags } = useComment(id);
const SelectedTags = ref<Tags[]>([]);
onLoad((options: any) => {
    course_id = options.id;
});
onShow(() => {
    fetch(course_id);
});

onMounted(() => {
    InitTags();
});

const goBack = () => {
    uni.navigateBack({
        delta: 1
    });
};
function AddTags(text: String) {
    for (const tag of TotalTags.value) {
        if (tag.text === text && !tag.isSelected && SelectedTags.value.length < 4) {
            tag.isSelected = true;
            SelectedTags.value.push(tag);
            tags.value.push(tag.text);
            break;
        }
        if (SelectedTags.value.length === 4) {
            uni.showToast({
                title: '最多添加4个',
                icon: 'none'
            });
        }
    }
    // for (const tag of tags) {
    //     if (tag.text === text && tag.isSelected) {
    //         tag.isSelected = false;
    //         SelectedTags.value = SelectedTags.value.filter((selectedTag) => selectedTag.text !== text);
    //         break;
    //     }
    // }
}
function RemoveTags(text: String) {
    for (const tag of SelectedTags.value) {
        if (tag.text === text && tag.isSelected) {
            tag.isSelected = false;
            SelectedTags.value = SelectedTags.value.filter((selectedTag) => selectedTag.text !== text);
            tags.value = tags.value.filter((tag) => tag !== text);
            break;
        }
    }
}
</script>

<style scoped lang="scss">
.top-bar {
    position: absolute;
    top: 0;
    background-color: #b70030;
    width: 100vw;
    height: 26vw;
    z-index: 2;
    .go-back {
        position: absolute;
        top: 15vw;
        left: 5vw;
        width: 100vw;
        display: flex;
        flex-direction: row;
        .txt {
            color: #ffffff;
            width: 100vw;
            font-size: 5vw;
            margin-left: 2vw;
            margin-top: 0.5vw;
            letter-spacing: 0.2vw;
            font-weight: bold;
        }
        .icon {
            width: 5vw;
            height: 8.53vw;
        }
    }
}
.ellipse {
    position: absolute;
    top: 22vw;
    background-color: #b70030;
    width: 100vw;
    height: 8vw;
    border-radius: 50%;
}
.title {
    position: absolute;
    top: 35vw;
    left: 36vw;
    font-size: 5.86vw;
    font-weight: bold;
    letter-spacing: 0.3vw;
}
.add-tag {
    position: absolute;
    top: 45vw;
    .tag-title {
        margin-top: 8vw;
        margin-left: 15vw;
        font-size: 4.8vw;
        font-weight: bold;
        letter-spacing: 0.3vw;
    }
    .tag-box-chosen {
        border: 0.5vw solid;
        //border-image-source: linear-gradient(111.97deg, #de3b3b 43.45%, #ea8120 108.2%);
        //border-image-slice: 1;
        border-color: #de3b3b;
        border-radius: 3.5vw;
        width: 89.33vw;
        height: 25.6vw;
        margin-left: 5vw;
        margin-top: 5vw;
        .chosen-title {
            font-size: 4.2vw;
            letter-spacing: 0.3vw;
            margin-top: 5vw;
            margin-left: 10vw;
        }
        .selected-box {
            display: flex;
            flex-wrap: wrap;
            width: 85vw;
            margin-left: 3vw;
            .tag-item {
                background: #f1f1f1;
                display: flex;
                flex-direction: row;
                padding: 1vw;
                border-radius: 2vw;
                width: 18vw;
                margin-left: 2vw;
                margin-top: 2vw;
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
    }
    .tag-box {
        border-style: dashed; /* 设置边框样式为虚线 */
        border-color: #de3b3b; /* 设置边框颜色 */
        border-width: 2px; /* 设置边框宽度 */
        border-radius: 4vw;
        width: 89.33vw;
        height: 35vw;
        margin-left: 5vw;
        margin-top: 4vw;
        .box-title {
            font-size: 4.2vw;
            letter-spacing: 0.3vw;
            margin-top: 5vw;
            margin-left: 10vw;
        }
        .chosen-box {
            display: flex;
            flex-wrap: wrap;
            width: 85vw;
            margin-left: 3vw;
            .tag-item {
                background: #f1f1f1;
                display: flex;
                flex-direction: row;
                padding: 1vw;
                border-radius: 2vw;
                width: 18vw;
                margin-left: 2vw;
                margin-top: 2vw;
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
    }
}
.add-comment {
    position: absolute;
    top: 135vw;

    .comment-title {
        margin-top: 2vw;
        margin-left: 15vw;
        font-size: 4.8vw;
        font-weight: bold;
        letter-spacing: 0.3vw;
    }
    .comment-box {
        border: 0.5vw solid;
        border-color: #de3b3b; /* 设置边框颜色 */
        border-width: 2px; /* 设置边框宽度 */
        border-radius: 4vw;
        width: 89.33vw;
        height: 35vw;
        margin-left: 5vw;
        margin-top: 4vw;
        .content-text {
            display: block;
            width: 95%; /* 输入框宽度占满父元素宽度 */
            height: 90%;
            padding: 3vw;
            text-align: left;
        }
    }
}
.comment-button {
    position: absolute;
    top: 190vw;
    left: 27vw;
    background-color: #b70030;
    box-shadow: 4px 4px 16px 0px #00000026;
    width: 42.1vw;
    height: 12.26vw;
    border-radius: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
        color: #ffffff;
        font-size: 5vw;
        letter-spacing: 0.3vw;
        font-weight: bold;
    }
}
</style>
