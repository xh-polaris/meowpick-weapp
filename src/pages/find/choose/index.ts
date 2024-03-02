import type {CommentVO, CourseVO, TeacherVO} from "@/api/data-contracts";

type choose = {
    "course"?: CourseVO[],
    "teacher"?: TeacherVO[],
    "comment"?: CommentVO[],
    "post"?: any[]
}
const map = {
    'course': useCourseStore(),
    'teacher': useCourseStore(),
    'comment': useCourseStore(),
    'post': useCourseStore(),
}

export function useChoose() {
    const keyword = shallowRef('')
    const type = shallowRef<"course" | "teacher" | "comment" | "post">('course')
    const rows = ref<choose>({
        "course": [],
        "teacher": [],
        "comment": [],
        "post": []
    })
    const page = ref(0)

    function jump(id: string) {
        // map[type.value].setData(item)
        uni.navigateTo({
            url: `/pages/${type.value}/index/index?id=${id}`
        })
    }

    function search(page: number) {
        if (keyword.value.length > 0) {
            http.SearchController.search({
                keyword: keyword.value, type: type.value, page, size: 5
            }).then(res => {
                rows.value[type.value] = [
                    ...rows.value[type.value]!,
                    ...res.data.payload.rows!
                ]
            })
        }
    }

    watch([page], () => search(page.value))
    watch([keyword, type], () => {
        rows.value[type.value] = []
        search(0)
    })

    return {
        keyword, type, rows, page,
        jump
    }
}