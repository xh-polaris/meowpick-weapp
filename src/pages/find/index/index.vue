<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import type {SearchHistoryVO} from "@/api/data-contracts";

onShow(() => {
    const curPages: any = getCurrentPages()[0];  // 获取当前页面实例
    if (typeof curPages.getTabBar === 'function' && curPages.getTabBar()) {
        curPages.getTabBar().setData({
            active: 2   // 表示当前菜单的索引，该值在不同的页面表示不同
        });
    }
})

const recent = shallowRef<SearchHistoryVO[]>([])
onShow(() => {
    http.SearchController.recent().then(res => {
        recent.value = res.data.payload
    })
})

function jump2search(keyword: string) {
    uni.navigateTo({
        url: `/pages/find/choose/index?keyword=${keyword}`
    })
}
PubSub.subscribe('un_login', () => {
    uni.clearStorage()
})

function commitInput(value: string) {
    PubSub.publish('commit_input', value)
}
</script>

<template>
    <layout>
        <div class="content">
            <div class="find ">
                <div class="input">
                    <find @onKeydown="jump2search"></find>
                </div>
                <div class="recent">
                    <div class="title">
                        最近搜索
                    </div>
                    <div class="text">
                        <ul>
                            <li class="item" v-for="item in recent">
                                <div class="txt" @click="jump2search(item.text!)">
                                    {{ item.text }}
                                </div>
                                <div class="icon" @click="commitInput(item.text!)">
                                    ↖
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="category">
            </div>
            <div id="recommend">
            </div>
        </div>
    </layout>
</template>