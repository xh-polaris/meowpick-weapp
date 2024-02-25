<script setup lang="ts">
const props = defineProps<{
  percent: number
}>()
const spanStyle = computed(() => ({
  'width': `${120 * props.percent / 100}px`,
  'position': 'absolute',
  'left': 0,
  'top': '-1px',
  'height': '6px',
  'background-color': 'orange',
  'border-radius': '6px'
}))
</script>

<template>
  <div class="index">
    <span :style="spanStyle"/>
  </div>
</template>

<style lang="scss" scoped>
.index {
  position: relative;
  margin-left: 10px;
  width: 120px;
  height: 4px;
  background: rgba(0, 0, 0, .15);
  border-radius: 4px;
}
</style>

