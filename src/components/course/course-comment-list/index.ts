import type {CommentVO} from "@/api/data-contracts";

type Props = {
    id: string
}
type Instance = {
    data: CommentVO[]
    page: number
}

export function useCourseComment(p: Props) {
    const page = shallowRef(0)
    const list = ref<{ [key: string]: CommentVO }>({})

    function fetch(id: string, page: number) {
        http.CommentController.query({id, page}).then(res => {
            res.data.payload.rows?.forEach(comment => {
                list.value[comment.id!] = comment
            })
        })
    }

    function like(target: string) {
        list.value[target]!.relation!.like = !list.value[target]!.relation!.like
        list.value[target]!.relation!.like_cnt! += list.value[target]!.relation!.like ? 1 : -1
        http.ActionController.like(target, {})
    }

    function next() {
        page.value++
    }

    // () => [p.id, ins.page],
    watchEffect(() => {
        fetch(p.id, page.value);
    })

    return {
        list, page,
        like, next
    }
}