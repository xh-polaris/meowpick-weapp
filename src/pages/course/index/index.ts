import api from "@/config/utils/http";
import type { Course, TeacherVO} from "@/api/data-contracts";
import {useCourseStore} from "@/config";

export function useCourse() {
    const id = ref('')
    const score = shallowRef<number[]>([])
    const course = shallowRef<Course>({data: useCourseStore().course})
    const teachers = shallowRef<TeacherVO[]>([])

    function fetch(data: string) {
        // ins.id = data
        id.value = data
        api.CourseController.get(data).then(res => {
            course.value = res.data.payload;

            api.TeacherController.getBatch(res.data.payload.data?.teachers!).then(res => {
                teachers.value = res.data.payload
            })
        })
        api.CoureLearnController.courseScoreList(data).then(res => {
            // ins.score = res.data.payload
            score.value = res.data.payload
        })
    }

    return {
        id, score, course, teachers,
        fetch
    }
}