import type {Ref} from "vue";

export function useComment(id: Ref<string>) {
    const title = ref('')
    const text = ref('')
    const score = ref(-1)

    function commit() {
        http.CommentController.add({
            text: text.value,
            target: id.value
        }).then(() => {
            uni.navigateBack()
        })
    }

    return {
        title, text, score,
        commit
    }
}