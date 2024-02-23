<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
const props = defineProps<{
  score: number[]
}>()
const en = useStar(props.score)
</script>

<template>
  <div class="star-box">
    <div class="star">
      <div class="number">{{ en.score.toFixed(1) }}</div>
      <div class="rate">
        <nut-rate size="10px" spacing="0" v-model="en.avg" allow-half readonly/>
      </div>
    </div>
    <div class="rank">
      <div class="star-icon">
        <div v-for="i in 5">
          <icon-star/>
        </div>
      </div>
    </div>
  </div>
</template>
