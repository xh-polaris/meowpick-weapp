<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import type {CourseVO} from "@/api/data-contracts";

type Props = {
    data: CourseVO
}
const props = defineProps<Props>()

function render_des(ls: any[]): string {
    return ls.join(' / ')
}
</script>

<template>
    <div class="index">
        <div class="info-wrapper">
            <div class="img">
                <img src="" alt="">
            </div>
            <div class="msg">
                <div>
                    <div class="title">
                        {{ data.name }}
                    </div>
                    <div class="name">
                        fajsiputptewtqqwesafet gfasre
                    </div>
                </div>
                <div class="rank">
                    <div class="rank-no">No.?</div>
                    <div class="rank-name">敬请期待</div>
                </div>
                <div class="des">
                    {{ render_des([data.point, data.category, data.campuses]) }}
                </div>
            </div>
        </div>
    </div>
</template>

