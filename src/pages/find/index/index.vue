<template>
    <top-bar />
    <view class="content">
        <!--        <img src="../../../images/cat.png" />-->
        <view class="find">
            <view class="input">
                <find @keydown="handleKeydown" />
            </view>
            <view class="hot">
                <text class="title">热搜</text>
                <view class="text">
                    <view class="box">
                        <view class="item">
                            <view class="txt" @click="jump2search('思政')">思政</view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="recent">
                <view class="history">
                    <text class="title">搜索历史</text>
                    <image src="../../..//images/delete-icon.png" class="delete" @click="deleteHistory"></image>
                </view>

                <view class="text" v-if="isShow">
                    <view class="box">
                        <view class="item" v-for="item in recent">
                            <view class="txt" @click="jump2search(item.text!)">
                                {{ item.text }}
                            </view>
                            <!--                                <div class="icon" @click="commitInput(item.text!)">↖</div>-->
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <div class="category"></div>
        <div class="recommend"></div>
    </view>
</template>

<script setup lang="ts">
import type { SearchHistoryVO } from '@/api/data-contracts';
import { useTokenStore } from '@/config';

const tokenStore = useTokenStore();

const recent = shallowRef<SearchHistoryVO[]>([]);
onShow(() => {
    http.SearchController.recent().then((res) => {
        recent.value = res.data.payload;
    });
});

function jump2search(keyword: string) {
    uni.navigateTo({
        url: `/pages/find/choose/index?keyword=${keyword}`
    });
}

// function commitInput(value: string) {
//     PubSub.publish('commit_input', value);
// }
function handleKeydown(text: string) {
    console.log('Received text from ChildComponent:', text);
}

const isShow = ref(true);
const deleteHistory = () => {
    http.SearchController.remove(tokenStore.userId).then((res) => {
        isShow.value = res.data.payload;
    });
};
</script>

<style scoped lang="scss">
.content {
    position: absolute;
    top: 35vw;
    left: 5vw;

    .hot {
        margin-top: 4vw;
        margin-left: 4vw;

        .title {
            font-weight: bold;
            font-size: 3.46vw;
        }

        .text {
            .box {
                margin-left: -5vw;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;

                .item {
                    background-color: #f2f2f2;
                    margin-left: 3vw;
                    margin-top: 3vw;
                    padding: 2vw;
                    border-radius: 3vw;

                    .txt {
                        color: #181818;
                        font-size: 3.2vw;
                    }
                }
            }
        }
    }

    .recent {
        margin-top: 13vw;
        margin-left: 4vw;

        .history {
            display: flex;
            flex-direction: row;

            .title {
                font-weight: bold;
                font-size: 3.46vw;
            }

            .delete {
                width: 6vw;
                height: 6vw;
                margin-left: 60vw;
            }
        }

        .text {
            .box {
                margin-left: -5vw;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;

                .item {
                    background-color: #f2f2f2;
                    margin-left: 3vw;
                    margin-top: 3vw;
                    padding: 2vw;
                    border-radius: 3vw;

                    .txt {
                        color: #181818;
                        font-size: 3.2vw;
                    }
                }
            }
        }
    }
}
</style>
