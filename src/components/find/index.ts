import type {SearchHistoryVO} from "@/api/data-contracts";

export const useInput = () => {
    const searchText = shallowRef('')
    const placeHolder = shallowRef('搜索')
    const list = shallowRef<any[]>([])
    const searchHistory = shallowRef<SearchHistoryVO[]>([])

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