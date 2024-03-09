<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
import type {Score} from "@/api/data-contracts";

const props = defineProps<{
    score: Score
}>()

</script>

<template>
    <div class="star-box">
        <div class="star">
            <div class="number">{{ parseFloat(score.score!.toFixed(1)) }}</div>
            <div class="rate">
                <nut-rate size="10px" spacing="0" v-model="score.avg" active-color="orange" allow-half readonly/>
            </div>
        </div>
        <div class="rank">
            <div class="star-item" v-for="i in 5">
                <div>
                    <icon-star :star="6-i"/>
                </div>
                <div>
                    <star-progress :percent="score.percent![6-i]"/>
                </div>
            </div>
        </div>
    </div>
</template>
