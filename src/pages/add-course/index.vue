<template>
  <top-bar class="top-bar" :selected="1" />
  <view class="container">
    <view class="form-group">
      <label for="course-name">课程名称</label>
      <input
        id="course-name"
        type="text"
        v-model="courseName"
        placeholder="请输入课程名称"
        :style="{ color: '#000000' }"
        class="input-field"
      />
    </view>

    <view class="form-group">
      <label for="course-category">课程类别</label>
      <picker mode="selector" :range="courseCategories" @change="onCourseCategoryChange">
        <view class="picker">
          {{ selectedCourseCategory }}
        </view>
      </picker>
    </view>

    <view class="form-group">
      <label for="department">开设院系</label>
      <picker mode="selector" :range="departments" @change="onDepartmentChange">
        <view class="picker">
          {{ selectedDepartment }}
        </view>
      </picker>
    </view>

    <view class="form-group">
      <label for="teacher">任课教师</label>
      <input
        id="teacher"
        type="text"
        v-model="teacherName"
        placeholder="请输入任课教师"
        class="input-field"
      />
    </view>

    <view class="form-group">
      <label for="campus">开设校区</label>
      <picker mode="selector" :range="campuses" @change="onCampusChange">
        <view class="picker">
          {{ selectedCampus }}
        </view>
      </picker>
    </view>

    <button class="submit-button" @click="submitCourse">添加课程</button>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const courseCategories = ref<string[]>([]);
const departments = ref<string[]>([]);
const campuses = ref<string[]>([]);

const courseName = ref('');
const teacherName = ref('');

const selectedCourseCategory = ref('请选择课程类别');
const selectedDepartment = ref('请选择开设院系');
const selectedCampus = ref('请选择开设校区');

const router = useRouter();

onMounted(async () => {
  try {
    // 获取课程类别
    const categoriesResponse = await http.CourseController.categoryList()
    courseCategories.value = categoriesResponse.data.payload;

    // 获取开设院系
    const departmentsResponse = await http.CourseController.departList()
    departments.value = departmentsResponse.data.payload;

    // 获取开设校区
    const campusesResponse = await http.CourseController.campusList()
    campuses.value = campusesResponse.data.payload;

  } catch (error) {
    console.error('加载数据失败:', error);
  }
});

const onCourseCategoryChange = (e: any) => {
  selectedCourseCategory.value = courseCategories.value[e.detail.value];
};

const onDepartmentChange = (e: any) => {
  selectedDepartment.value = departments.value[e.detail.value];
};

const onCampusChange = (e: any) => {
  selectedCampus.value = campuses.value[e.detail.value];
};

const submitCourse = async () =>
{
  if (!courseName.value.trim() ||
    selectedCourseCategory.value === '请选择课程类别' ||
    selectedDepartment.value === '请选择开设院系' ||
    !teacherName.value.trim() || // 检查任课教师是否填写
    selectedCampus.value === '请选择开设校区') {
    uni.showToast({
      title: '请填写所有信息',
      icon: 'none'
    });
    return;
  }

// 提交课程信息到后端
  const courseData = {
    name: courseName.value.trim(),
    category: selectedCourseCategory.value,
    department: selectedDepartment.value,
    teacher: teacherName.value.trim(),
    campus: selectedCampus.value
  };

  try {
    const response = await http.CourseController.add(courseData);
    console.log('课程添加成功:', response.data);

    uni.showToast({
      title: '课程添加成功',
      icon: 'success'
    });

    setTimeout(() => {
      console.log('即将跳转到首页');
      uni.switchTab({
        url: '/pages/home/home'
      });
    }, 1500);
  } catch (error) {
    console.error('课程添加失败:', error);
    uni.showToast({
      title: '课程添加失败',
      icon: 'none'
    });
  }
};

</script>


<style scoped lang="scss">
.container {
  padding: 20px;
  margin-top: 120px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.picker {
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #b70030;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}

.submit-button:hover {
  background-color: #e60012;
}

.input-field {
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  height: 41px;
  color: #000000; // 设置文本颜色，与其他框一致
}

.input-field::placeholder {
  color: #000000 !important; /* 设置提示文本颜色为黑色 */
  font-size: 16px !important; /* 设置字体大小 */
  font-family: '微软雅黑', sans-serif !important; /* 设置字体 */
  line-height: 41px !important; /* 行高与输入框高度一致，使文本垂直居中 */
}
</style>
