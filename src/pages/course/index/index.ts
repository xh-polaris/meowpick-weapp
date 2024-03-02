import type {Course, TeacherVO} from "@/api/data-contracts";
import {useCourseStore} from "@/config";

export function useCourse() {
    const id = ref('')
    const score = shallowRef<number[]>([])
    const course = shallowRef<Course>({data: useCourseStore().course, leaned: 0, wanted: 0, want: false, learn: false})
    const teachers = shallowRef<TeacherVO[]>([])

    function fetch(data: string) {
        // ins.id = data
        id.value = data
        http.CourseController.get(data).then(res => {
            course.value = res.data.payload;

            http.TeacherController.getBatch(res.data.payload.data?.teachers!).then(res => {
                teachers.value = res.data.payload
            })
        })
        http.CoureLearnController.courseScoreList(data).then(res => {
            // ins.score = res.data.payload
            score.value = res.data.payload
        })
    }

    return {
        id, score, course, teachers,
        fetch
    }
}