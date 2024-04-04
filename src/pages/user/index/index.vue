<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
type Props = {}
const props = defineProps<Props>()

const value = ref('1')

const {list, like, next, fetch, page} = useCourseComment(props)
</script>

<template>
    <div class="index">
        <div class="userinfo">
            <div class="avatar">
                avatar
            </div>
            <div class="username">
                username
            </div>
        </div>

        <div class="post">
            <nut-tabs v-model="value" type="smile" swipeable>
                <nut-tab-pane title="动态" pane-key="1">
                    <ul>
                        <li v-for="item in list" :key="item.id">
                            <comment-item :data="item" @like="like"/>
                        </li>
                    </ul>
                </nut-tab-pane>
                <nut-tab-pane title="" pane-key="2" disabled>  </nut-tab-pane>
                <nut-tab-pane title="" pane-key="3" disabled>  </nut-tab-pane>
            </nut-tabs>
        </div>
    </div>
</template>

