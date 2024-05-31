<template>
    <view class="top-bar">
        <view class="tap-bar">
            <view class="search">
                <text class="content" @click="goToSearch">搜索</text>
                <!--                <image class="chosen-search" src="../../images/chosen_line.png"></image>-->
            </view>
            <view class="my-comment" @click="goToMyComments">我的吐槽</view>
        </view>
    </view>
    <view class="ellipse"></view>
    <image :src="Logo" class="logo" />
    <view class="search-table">
        <image src="../../images/search_table.png" class="search-button" @click="goToSearch"></image>
    </view>
    <view class="toolbox"> </view>
    <ToolBox class="toolbox"></ToolBox>
</template>

<script setup lang="ts">
import ToolBox from '@/pages/home/ToolBox.vue';
import Logo from '/src/images/logo.png';

const goToSearch = () => {
    uni.navigateTo({
        url: '/pages/find/index/index'
    });
};
const goToMyComments = () => {
    uni.navigateTo({
        url: '/pages/my-comments/my-comments'
    });
};
</script>

<style scoped lang="scss">
.top-bar {
    position: absolute;
    top: 0;
    background-color: #b70030;
    width: 100vw;
    height: 25vw;
    .tap-bar {
        display: flex;
        flex-direction: row;
        position: absolute;
        top: 14vw;
        left: 8vw;
        .search {
            color: #ffffff;
            font-size: 4vw;
            letter-spacing: 0.6vw;
            display: flex;
            flex-direction: column;
            .chosen-search {
                width: 6.4vw;
                height: 1vw;
                margin-top: 2vw;
                margin-left: 1vw;
            }
        }
        .my-comment {
            color: #ffffff;
            font-size: 4vw;
            margin-left: 10vw;
            letter-spacing: 0.3vw;
        }
    }
}
.ellipse {
    position: absolute;
    top: 21vw;
    background-color: #b70030;
    width: 100vw;
    height: 8vw;
    border-radius: 50%;
}
.logo {
    position: absolute;
    top: 33vw;
    width: 100vw;
    height: 69.87vw;
}
.search-button {
    position: absolute;
    top: 105vw;
    left: 5vw;
    width: 92vw;
    height: 20vw;
}
.toolbox {
    margin-top: 125vw;
}
.mewochat {
    margin-top: 150vw;
}
</style>
