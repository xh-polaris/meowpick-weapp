<template>
    <view class="top-bar">
        <view class="tap-bar">
            <view class="search">
                <text class="content" @click="goToSearch">搜索</text>
                <image class="chosen-search" src="../../images/chosen_line.png"></image>
            </view>
            <view class="my-comment" @click="goToMyComment">我的吐槽</view>
        </view>
    </view>
    <view class="ellipse"></view>
</template>

<script setup lang="ts">
const goToSearch = () => {
    uni.navigateTo({
        url: '/pages/find/index/index'
    });
};
const goToMyComment = () => {
    uni.navigateTo({
        url: '/pages/my-comments/my-comments'
    });
};
</script>

<style scoped lang="scss">
.top-bar {
    position: fixed;
    top: 0;
    background-color: #b70030;
    width: 100vw;
    height: 25vw;
    .tap-bar {
        display: flex;
        flex-direction: row;
        position: fixed;
        top: 14vw;
        left: 8vw;
        .search {
            color: #ffffff;
            font-size: 4.5vw;
            font-weight: bold;
            letter-spacing: 0.6vw;
            margin-top: -1.5vw;
            display: flex;
            flex-direction: column;
            .chosen-search {
                width: 6.4vw;
                height: 1vw;
                margin-top: 2vw;
                margin-left: 1.5vw;
                z-index: 1;
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
    position: fixed;
    top: 21vw;
    background-color: #b70030;
    width: 100vw;
    height: 8vw;
    border-radius: 50%;
}
</style>
