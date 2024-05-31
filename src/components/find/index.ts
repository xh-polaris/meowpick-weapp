import type { SearchHistoryVO } from '@/api/data-contracts';

export const useInput = () => {
    const searchText = ref('');
    const placeHolder = shallowRef('搜索课程类别、名称、院系或任课教师');
    const list = shallowRef<any[]>([]);
    const searchHistory = shallowRef<SearchHistoryVO[]>([]);

    watchEffect(() => {
        console.log(searchText.value);
    });

    const text = computed(() => {
        if (searchText.value != undefined && searchText.value?.length > 0) {
            return searchText.value;
        } else {
            return placeHolder.value;
        }
    });

    return {
        searchText,
        placeHolder,
        list,
        searchHistory,
        text
    };
};

import type { CommentVO, Course, TeacherVO } from '@/api/data-contracts';

type choose = {
    course?: Course[];
    teacher?: TeacherVO[];
    comment?: CommentVO[];
    post?: any[];
};
const map = {
    course: useCourseStore(),
    teacher: useCourseStore(),
    comment: useCourseStore(),
    post: useCourseStore()
};

export function useChoose() {
    const keyword = shallowRef('');
    const type = shallowRef<'course' | 'teacher' | 'comment' | 'post'>('course');
    const rows = ref<choose>({
        course: [],
        teacher: [],
        comment: [],
        post: []
    });
    const page = ref(0);

    function jump(id: string) {
        // map[type.value].setData(item)
        uni.navigateTo({
            url: `/pages/${type.value}/index/index?id=${id}`
        });
    }

    function search(page: number) {
        if (keyword.value.length > 0) {
            http.SearchController.search({
                keyword: keyword.value,
                type: type.value,
                page,
                size: 15
            }).then((res) => {
                rows.value[type.value] = [...rows.value[type.value]!, ...res.data.payload.rows!];
            });
        }
    }

    watch([page], () => search(page.value));
    watch([keyword, type], () => {
        rows.value[type.value] = [];
        search(page.value);
    });

    return {
        keyword,
        type,
        rows,
        page,
        jump
    };
}

export const SearchTypeMap = (type: string) => {
    if (type === 'course') return '课程';
    else if (type === 'teacher') return '教师';
};
