import type {CommentVO} from "@/api/data-contracts";

export function useCourseComment(data: string) {
    return reactive(new class {
        fetch() {
            http.CommentController.query({id: this.id}).then(res => {
                this.data = res.data.payload.rows!
            })
        }

        like(target: string) {
            http.ActionController.like(target)
        }

        id: string
        data: CommentVO[]

        constructor(id: string) {
            console.log('id', id, 'end')
            this.data = []
            this.id = id

            this.fetch()
        }
    }(data))
}