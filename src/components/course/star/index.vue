<style scoped lang="scss" src="./style.scss"/>
<script setup lang="ts">
const props = defineProps<{
  score: number[]
}>()

let en = computed(() => useStar(props.score))
</script>

<template>
  <div class="star-box">
    <div class="star">
      <div class="number">{{ en.score.toFixed(1) }}</div>
      <div class="rate">
        <nut-rate size="10px" spacing="0" v-model="en.avg" active-color="orange" allow-half readonly/>
      </div>
    </div>
    <div class="rank">
      <div class="star-item" v-for="i in 5">
        <div>
          <icon-star :star="6-i"/>
        </div>
        <div>
          <star-progress :percent="en.map[6-i]"/>
        </div>
      </div>
    </div>
  </div>
</template>
