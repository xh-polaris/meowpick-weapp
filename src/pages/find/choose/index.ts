import type { CommentVO, Course, TeacherVO } from "@/api/data-contracts";

import { ref, shallowRef, watch } from 'vue';
import { result } from "lodash-es";

type choose = {
  course?: Course[];
  teacher?: Course[];
  depart?: Course[];
  category?: any[];
};
const map = {
  course: useCourseStore(),
  teacher: useCourseStore(),
  comment: useCourseStore(),
  post: useCourseStore()
};

export function useChoose() {
  const keyword = shallowRef("");
  const type = shallowRef<"course" | "teacher" | "depart" | "category">(
    "course"
  );
  const rows = ref<choose>({
    course: [],
    teacher: [],
    depart: [],
    category: []
  });
  const page = ref(0);

  const isModalVisible = ref(false); // 控制弹窗显示的变量

  function jump(id: string) {
    // map[type.value].setData(item)
    uni.navigateTo({
      url: `/pages/course/index/index?id=${id}`
    });
  }

  function search(page: number) {
    if (keyword.value.length > 0) {
      http.SearchController.search({
        keyword: keyword.value,
        type: type.value,
        page,
        size: 10
      }).then((res) => {
        if (res.data.payload && res.data.payload.rows) {
          const newRows = res.data.payload.rows;
          rows.value[type.value] = [
            ...rows.value[type.value]!,
            ...newRows
          ];

          // 检查是否有搜索结果
          if (newRows.length === 0) {
            isModalVisible.value = true; // 显示弹窗
          } else {
            isModalVisible.value = false; // 隐藏弹窗
          }

          console.log(isModalVisible)

          console.log("搜索信息：", rows.value[type.value]);
        } else {
          // 如果没有有效的 payload 或 rows，显示弹窗
          isModalVisible.value = true;
        }
      }).catch((error) => {
        // 处理请求错误
        console.error("搜索请求失败：", error);
        isModalVisible.value = true; // 在错误情况下显示弹窗
      });
    }
  }


  watch([page], () => {
    search(page.value);
  });
  watch([keyword, type], () => {
    rows.value[type.value] = [];
    search(page.value);
  });

  return {
    keyword,
    type,
    rows,
    page,
    jump,
    isModalVisible // 返回弹窗状态
  };
}
