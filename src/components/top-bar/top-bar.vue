<template>
  <view class="top-bar">
    <view class="tap-bar">
      <view
        v-for="(item, index) of tabBarList"
        :key="index"
        :class="{ 'tab-bar-item': true, currentTar: selected == item.id }"
        @click="switchTab(item.pagePath)"
      >
        <view
          class="tab_text"
          :style="{
            fontWeight: selected == item.id ? 'bold' : 'normal',
            fontSize: selected == item.id ? '4.5vw' : '4vw',
            letterSpacing: selected == item.id ? '0.6vw' : '0.3vw'
          }"
        >
<!--          <image v-if="item.icon" :src="item.icon" />-->
<!--          <view v-else>{{ item.text }}</view>-->
          <view>{{ item.text }}</view>
        </view>
      </view>
    </view>
    <image
      class="chosen-search"
      src="../../images/chosen_line.png"
      :style="{
        marginLeft: selected === 0 ? '10vw' : // 修改：新增第三个选项的计算
                    selected === 1 ? '32vw' :
                    '53vw' // 新增：为第三个选项添加 marginLeft 计算
      }"
    />
  </view>
  <view class="ellipse" />
</template>

<script setup lang="ts">
const props = defineProps<{
  selected: number;
}>();

// 引入图片
// import topCat from '@/images/top-cat.png';

const tabBarList = ref([
  {
    id: 0,
    pagePath:"/pages/home/home",
    text:"首页",
    // icon: "../../images/top-cat.png" // 添加图标路径
    // icon: require('@/images/top-cat.png') // 使用 require 加载图片
    // icon: topCat // 使用导入的图片路径
  },
  {
    id: 1,
    pagePath: "/pages/find/index/index",
    text: "搜索"
  },
  {
    id: 2,
    pagePath: "/pages/my-comments/my-comments",
    text: "我的吐槽"
  }
]);
const switchTab = (page: string) => {
  uni.switchTab({
    url: page
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
  z-index: 20;
  .tap-bar {
    margin-top: 14vw;
    margin-left: 3vw;
    display: grid;
    //width: 50vw;
    width: 65vw; // 修改：更新宽度以适应三项
    //grid-template-columns: 20vw 30vw;
    grid-template-columns: repeat(3, 1fr); // 修改：更新为三列
    align-items: end;
    .tab-bar-item {
      color: #ffffff;
      font-size: 4vw;
      transition: all 1s ease-in-out;
      margin: auto;
      letter-spacing: 0.5vw;
    }
    .tab_text image {
      width: 20vw; // 设置图片宽度，根据需要调整
      height: auto;
    }
  }
  .chosen-search {
    position: absolute;
    width: 6.4vw;
    height: 1vw;
    z-index: 99;
    margin-top: 2vw;
    //margin-left: 6vw;
    transition: all 0.5s ease-in-out;
  }
}
.ellipse {
  position: fixed;
  top: 21vw;
  background-color: #b70030;
  width: 100vw;
  height: 8vw;
  border-radius: 50%;
  z-index: 10;
}
</style>
