<template>
  <scroll @bottom="handleScrollBottom">
    <top-bar class="top-bar" :selected="1" />

<!--    <div class="button-container">-->
<!--      <button class="home-button" @click="goHome">返回首页</button>-->
<!--    </div>-->

    <!-- 条件渲染的弹窗 -->
    <view v-if="isModalVisible" class="modal-overlay">
      <view class="modal">
        <text class="modal-title">没有找到课程</text>
        <button @click="navigateToAddCourse">添加课程</button>
        <view class="close" @click="closeModal">×</view>
      </view>
    </view>

    <div class="box">
      <ul>
        <li
          v-for="item in rows.course"
          class="course-li"
          @click="jump(item.data?.id!)"
        >
          <choose-course :data="item" />
        </li>
      </ul>
    </div>
    <div class="bottom">--- 到底了哟 ---</div>
  </scroll>
</template>


<script setup lang="ts">
import { useChoose } from "./index";
import { useRouter } from 'vue-router';

const { type, keyword, jump, rows, page ,isModalVisible} = useChoose();
const router = useRouter();


onLoad((options: any) => {
  keyword.value = options.keyword;
  PubSub.publish("commit_input", options.keyword);
});

function handleScrollBottom() {
  page.value++;
}

function goHome() {
  uni.reLaunch({
    url: '/pages/home/home'
  });
}

// 新增：处理导航到添加课程页面的函数
function navigateToAddCourse() {
  uni.navigateTo({
    url: '/pages/add-course/index'
  });
  closeModal();
}

// 新增：关闭弹窗的函数
function closeModal() {
  isModalVisible.value = false;
}


</script>

<style scoped lang="scss">
.button-container {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  background: #fff;
  margin-top: 120px;
}

.home-button {
  font-size: 16px;
  color: #fff;
  background-color: #b70030;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.home-button:hover {
  background-color: #e60012;
}

.box {
  margin-top: 35vw;
  margin-left: 5vw;
}

.bottom {
  margin-left: 37.5vw;
  margin-top: 2.5vw;
  font-size: 3.3vw;
  color: #777777;
}


/* 新增：弹窗的样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  padding: 2vw;
  border-radius: 1vw;
  text-align: center;
  position: relative;
  width: 50vw;
  height: 15vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow-y: auto; /* 如果内容超过最大高度，允许垂直滚动 */
  //居中显示
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .modal-title {
    font-size: 4vw;
    margin-bottom: 4vw;
  }

  button {
    background-color: #b70030;
    color: white;
    border: none;
    padding: 1vw 2vw;
    border-radius: 0.5vw;
    cursor: pointer;
    font-size: 3vw; /* 调整按钮字体大小 */
  }

  .close {
    position: absolute;
    top: 1vw;
    right: 1vw;
    font-size: 3vw;
    cursor: pointer;
  }
}
</style>
