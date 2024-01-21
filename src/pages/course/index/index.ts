import api from "@/config/utils/http";
import type {CourseVO} from "@/api/data-contracts";
import {useCourseStore} from "@/config";

class Course implements InitializeComponent{
    init(): void {
    }

    id: string
    data: CourseVO
    comment: any[]

    constructor() {
        this.id = ''
        this.data = useCourseStore().course
        this.comment = []
    }

    setId(id: string): void {
        this.id = id
        this.comment = [1, 2, 3]
    }

    learn() {
        api.CourseController.learn(this.id)
    }

    want() {
        api.CourseController.want(this.id)
    }
}

export function useCourse() {
    return reactive(new Course())
}