import type {CommentVO, CourseVO, TeacherVO} from "@/api/data-contracts";

type choose = {
    "course"?: CourseVO[],
    "teacher"?: TeacherVO[],
    "comment"?: CommentVO[],
    "post"?: any[]
}

export function useChoose() {
    const keyword = shallowRef('')
    const type = shallowRef<"course" | "teacher" | "comment" | "post">('course')
    const rows = ref<choose>({})

    function jump(id: string) {
        uni.navigateTo({
            url: `/pages/${type.value}/index/index?id=${id}`
        })
    }

    watchEffect(() => {
        if (keyword.value.length > 0) {
            http.SearchController.search({
                keyword: keyword.value, type: type.value
            }).then(res => {
                console.log(res.data.payload)
                rows.value[type.value] = res.data.payload.rows
            })
        }
    })

    return {
        keyword, type, rows,
        jump
    }
}