<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import Choose from './index'

const choose = reactive(new Choose())
onLoad((options: { keyword: string }) => {
    choose.setKeyWork(options.keyword)
})
onMounted(() => {
    choose.init()
})
</script>

<template>
    <layout>
        <div class="wrapper">
            <div class="category">
                category
            </div>
            <virtual-list :data="choose.data">
                <template #row="{data}">
                    <div @click="choose.info(data)">
                        {{ data }}
                    </div>
                </template>
            </virtual-list>
            <div class="item" v-for="i in 20">
                <div @click="choose.info(i)">
                    课程名称
                    分类
                    院系
                    教师
                    学分
                    校区
                </div>
            </div>
        </div>
    </layout>
</template>

