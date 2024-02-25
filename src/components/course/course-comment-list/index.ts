import type {CommentVO} from "@/api/data-contracts";

type Props = {
    id: string
}
type Instance = {
    data: CommentVO[]
    page: number
}

export function useCourseComment(p: Props) {
    const instance: Instance = shallowReactive({
        data: [],
        page: 0
    })

    function fetch(id: string) {
        http.CommentController.query({id, page: instance.page, size: 1}).then(res => {
            instance.data = [...instance.data, ...res.data.payload.rows!]
        })
    }

    function like(target: string) {
        http.ActionController.like(target)
    }

    function next() {
        instance.page++
    }

    const list = computed(() => instance.data)
    watch(() => [p.id, instance.page], () => {
        fetch(p.id);
    })

    return {
        list,
        like, next
    }
}