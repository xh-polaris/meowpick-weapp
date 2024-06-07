<template>
  <view class="comment-box">
    <view v-if="data.user?.id === tokenStore.userId" class="my-box" />
    <view class="box">
      <view class="top-bar">
        <view class="tag">
          <template v-for="item of data.tags">
            <view v-if="Emoji(item)" class="item" >
              <image :src="Emoji(item)" class="emoji" />
              <text class="tag-txt">{{ item }}</text>
            </view>
          </template>
        </view>
        <view class="time">{{ format(data.crateAt) }}</view>
      </view>
      <view class="content">{{ data.text }}</view>
      <view class="like">
        <image
          :src="data.relation?.like ? Liked : Like"
          class="like-icon"
          @click="like"
        />
        <view class="like-num">{{ data.relation?.like_cnt }}</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { CommentVO } from "@/api/data-contracts";
import { useTokenStore } from "@/config";
import Like from "@/images/like-icon.png";
import Liked from "@/images/like_active.png";
import { format } from "@/pages/course/index/utils";
import {Emoji} from "@/utils/tags";

type Props = {
  data: CommentVO;
};
const props = defineProps<Props>();

const tokenStore = useTokenStore();
const emit = defineEmits<{
  like: (id: string) => void;
}>();

function like() {
  emit("like", props.data.id);
}
</script>

<style scoped lang="scss">
.comment-box {
  position: relative;
  .box {
    width: 89.33vw;
    height: auto;
    background-color: #ffffff;
    box-shadow: 2px 2px 10px 0px #0000001f;
    border-radius: 3vw;
    margin-left: 5vw;
    margin-top: 2.5vw;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
    .top-bar {
      position: relative;
      display: flex;
      flex-direction: row;
      .tag {
        display: flex;
        flex-wrap: wrap;
        margin-top: 3vw;
        .item {
          background: #f1f1f1;
          display: flex;
          flex-direction: row;
          padding: 1vw;
          border-radius: 2vw;
          margin-left: 2vw;
          .emoji {
            width: 6.4vw;
            height: 6.4vw;
          }
          .tag-txt {
            margin-top: 1vw;
            margin-left: 1vw;
          }
        }
      }
      .time {
        position: absolute;
        right: 4vw;
        top: 4vw;
        font-size: 3.5vw;
        margin-bottom: 1vw;
      }
    }
    .content {
      margin-top: 6vw;
      width: 82.93vw;
      margin-left: 3.5vw;
      letter-spacing: 0.3vw;
      line-height: 1.5;
    }
    .like {
      display: flex;
      flex-direction: row;
      margin-left: 75vw;
      margin-top: 5vw;
      margin-bottom: 3vw;
      .like-icon {
        top: 5vw;
        width: 5.86vw;
        height: 5.86vw;
      }
      .like-num {
        top: 5.5vw;
        margin-left: 2vw;
        margin-top: 1vw;
      }
    }
  }
  .my-box {
    background-color: #b70030;
    //width: 92vw;
    height: 100%;
    //margin-left: 6vw;
    border-radius: 3vw;
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 4vw;
    right: 4.5vw;
  }
}
</style>
