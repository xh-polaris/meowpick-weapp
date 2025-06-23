<template>
  <view class="comment">
    <view v-for="item of list" :key="item.id" class="item">
      <CommentBox :data="item" @like="like" @reply="handleReply" />
    </view>
    <view v-if="showReplyInput" class="reply-box">
      <input
        v-model="replyText"
        placeholder="写下你的回复..."
        class="reply-input"
      />
      <button @click="submitReply">
        <img src="@/images/check.svg" class="ok-icon" alt="提交" />
      </button>
      <button @click="cancelReply">
        <img src="@/images/cross.svg" class="no-icon" alt="取消" />
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useCourseComment } from "@/pages/course/index/utils";
import CommentBox from "@/pages/course/index/CommentBox.vue";
import { CommentApi } from "@/api/CommentApi";
const commentApi = new CommentApi(http); // 这里实例化 API

const props = defineProps<{
  id: string;
}>();
const { list, like, next, fetch, page } = useCourseComment(props);
PubSub.subscribe("comment-next", () => {
  next();
});

// 统一管理回复输入框
const showReplyInput = ref(false);
const replyText = ref("");
const replyTargetId = ref<string | null>(null); // 记录正在回复的评论 ID
const courseID = ref<string | null>(null); // 记录正在回复的评论的课程ID

// 监听子组件的“回复”事件
const handleReply = (commentId: string) => {
  showReplyInput.value = true;
  replyTargetId.value = commentId; // 记录要回复的评论
};

// 取消回复
const cancelReply = () => {
  console.log("Cancel reply");
  showReplyInput.value = false;
  replyText.value = "";
};

// 提交回复
const submitReply = async () => {
  console.log("replyText", replyText);
  if (!replyText.value.trim() || !replyTargetId.value) return;
  // 获取被回复的评论
  const targetComment = list.value[replyTargetId.value];

  // 确保获取到了目标评论
  if (!targetComment) {
    console.error("未找到被回复的评论！");
    return;
  }

  // 判断 `firstLevelId`（如果是一级评论，自己就是 firstLevelId）
  const firstLevelId = targetComment.firstLevelId || targetComment.id;

  try {
    const res = await commentApi.add({
      target: props.id, // 课程 ID 或文章 ID
      text: replyText.value,
      parentId: replyTargetId.value,
      firstLevelId: firstLevelId, // 所属的一级评论 ID
      replyTo: replyTargetId.value
    });

    fetch(props.id, 0);

    setTimeout(() => {
      console.log("刷新后的数据：", list.value);
    }, 1000);
  } catch (error) {
    console.log(error);
  }

  // 清空输入框
  replyText.value = "";
  showReplyInput.value = false;
  replyTargetId.value = null;
};
</script>

<style scoped lang="scss">
.comment {
  display: flex;
  flex-direction: column;
  .item {
    margin-top: auto;
  }
}

.reply-box {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 600px;
  background: #ffffff;
  padding: 12px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #de3b3b;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10000;
  transition: all 0.3s ease-in-out;
  height: 8vh;

  .ok-icon {
    filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(90deg);
    width: 10px;
    height: 10px;
  }
  .no-icon {
    filter: brightness(0) saturate(100%) invert(15%) sepia(46%) saturate(7481%)
      hue-rotate(353deg) brightness(94%) contrast(105%);
    width: 10px;
    height: 10px;
  }
  .reply-input {
    position: relative;
    flex: 1;
    padding: 8px 12px;
    border: none;
    outline: none;
    font-size: 16px;
    background-color: transparent;
    color: #333;
    height: 100%;
  }
}

.reply-box button {
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2vw;
}
</style>
