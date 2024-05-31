<template>
    <view class="wrapper">
        <view class="input-box">
            <image class="go-back" src="../..//images/go-back2.png" @click="GoBack"></image>
            <input
                v-model="searchText"
                class="search-text"
                :placeholder="placeHolder"
                @input="suggest"
                @confirm="notify"
            />
            <image class="icon" @click="jump2List(keyword)" src="../../images/search-icon.png"></image>
        </view>
        <scroll class="search-list" v-if="searchText" @bottom="bottom">
            <ul>
                <li v-for="item in rows.course" :key="item.data?.id" @click="jump(item.data?.id!)" class="search-item">
                    <view class="content">
                        <view class="type">{{ SearchTypeMap(type) }}</view>
                        <view class="name">{{ item.data?.name }}</view>
                    </view>
                    <view class="line"></view>
                </li>
            </ul>
        </scroll>
    </view>
</template>

<script setup lang="ts">
import { useInput, useChoose, SearchTypeMap } from './index';

const props = defineProps<{
    keyword: string;
}>();
const emit = defineEmits<{
    onKeydown: string;
}>();

const { searchText, placeHolder, list, searchHistory, text } = useInput();
const { keyword, type, rows, page, jump } = useChoose();

function notify() {
    emit('onKeydown', searchText.value);
}

function suggest() {
    keyword.value = searchText.value;
}

PubSub.subscribe('commit_input', (value) => {
    searchText.value = value;
});
onLoad((options: any) => {
    keyword.value = options.keyword;
    PubSub.publish('commit_input', options.keyword);
});

const GoBack = () => {
    uni.navigateBack({
        delta: 1
    });
};

const bottom = () => {
    page.value++;
};

const jump2List = (keyword: string) => {
    uni.navigateTo({
        url: `/pages/find/choose/index?keyword=${keyword}`
    });
};
</script>

<style scoped lang="scss">
.input-box {
    display: flex;
    flex-direction: row;
    width: 89.33vw;
    height: 13.86vw;
    border: 0.45vw solid #e61e1e;
    //border-image-source: linear-gradient(95.1deg, #e61e1e -3.97%, #ee9563 86.14%);
    //border-image-slice: 1;
    border-radius: 6vw;
    padding: 4vw;
    .go-back {
        width: 2.6vw;
        height: 4vw;
        margin-top: 0.5vw;
    }
    .search-text {
        font-size: 3.4vw;
        width: 70vw;
        color: #777777;
        letter-spacing: 0.1vw;
        margin-left: 2vw;
    }
    .icon {
        width: 6vw;
        height: 5.3vw;
        margin-left: 10vw;
    }
}
.search-list {
    position: absolute;
    background-color: #ffffff;
    width: 100vw;
    height: 216vw;
    z-index: 99;
    .search-item {
        display: flex;
        flex-direction: column;
        .content {
            margin-top: 5vw;
            display: flex;
            flex-direction: row;
            .type {
                background-color: #ffe4d5;
                padding: 1vw 2vw 1vw 2vw;
                border-radius: 4vw;
                .txt {
                    font-size: 3.3vw;
                }
            }
            .name {
                margin-left: 5vw;
                margin-top: 1vw;
                font-size: 3.7vw;
            }
        }
        .line {
            width: 89vw;
            height: 0.2vw;
            background-color: #ebebeb;
            margin-top: 3vw;
        }
    }
}
</style>
