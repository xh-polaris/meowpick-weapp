import api from "@/config/utils/http";
import type {CourseVO, Course, TeacherVO} from "@/api/data-contracts";
import {useCourseStore} from "@/config";

export function useCourse() {
    return reactive(new class implements InitializeComponent {
        init(): void {
            api.CourseController.get(this.id).then(res => {
                this.course = res.data.payload;
                api.TeacherController.getBatch(res.data.payload.data?.teachers!).then(res => {
                    this.teachers = res.data.payload
                })
            })
            api.CoureLearnController.courseScoreList(this.id).then(res => {
                this.score = res.data.payload
            })

        }

        id: string
        data: CourseVO
        course: Course
        score: number[]
        teachers: TeacherVO[]

        constructor() {
            this.id = ''
            this.data = useCourseStore().course
            this.score = []
            this.course = {}
            this.teachers = []
        }

        setId(id: string): void {
            this.id = id
            this.init()
        }
    })
}