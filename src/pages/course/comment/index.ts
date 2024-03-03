import type {Ref} from "vue";

const map = {
    '0': http.CoureLearnController.start,
    '1': http.CoureLearnController.end
}

export function useComment(id: Ref<string>) {
    const title = ref('')
    const text = ref('')
    const score = ref(0)
    const tags = shallowRef<string[]>([])
    const code = ref<'0' | '1'>('1')

    function commit() {
        console.log(id.value, {
            title: title.value,
            text: text.value,
            score: score.value,
            tags: tags.value
        })

        map[`${code.value}`](id.value, {
            title: title.value,
            text: text.value,
            score: score.value,
            tags: tags.value
        }).then(() => {
            uni.navigateBack()
        })

        // http.CoureLearnController.start(id.value, {
        //     title: title.value,
        //     text: text.value,
        //     score: score.value,
        //     tags: tags.value
        // }).then(() => {
        //     uni.navigateBack()
        // })
    }

    return {
        title, text, score, tags, code,
        commit
    }
}