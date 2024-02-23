import api from "@/config/utils/http";
import type {CourseVO, Course, CommentVO} from "@/api/data-contracts";
import {useCourseStore} from "@/config";
export function useCourse() {
    return reactive(new class implements InitializeComponent {
        init(): void {
            api.CourseController.get(this.id).then(res => {
                this.course = res.data.payload;
            })
        }

        id: string
        data: CourseVO
        comment: CommentVO[]
        course: Course

        constructor() {
            this.id = ''
            this.data = useCourseStore().course
            this.comment = []

            this.course = {}
        }

        setId(id: string): void {
            this.id = id
            this.init()
        }

        learn() {
            api.CourseController.learn(this.id).then(res => this.init())
        }

        want() {
            api.CourseController.want(this.id).then(res => this.init())
        }
    })
}