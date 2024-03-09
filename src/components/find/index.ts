import type {SearchHistoryVO} from "@/api/data-contracts";
import type {ToRefs} from 'vue'

export const useInput = () => {
    const searchText = ref('')
    const placeHolder = shallowRef('搜索')
    const list = shallowRef<any[]>([])
    const searchHistory = shallowRef<SearchHistoryVO[]>([])

    watchEffect(() => {
        console.log(searchText.value)
    })

    const text = computed(() => {
        if (searchText.value != undefined && searchText.value.length > 0) {
            return searchText.value
        } else {
            return placeHolder.value
        }
    })

    return {
        searchText, placeHolder, list, searchHistory,
        text
    }
}