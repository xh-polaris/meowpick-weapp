async function query(query: {
    keyword?: string;
    category?: string;
    /** @format int32 */
    page?: number;
    /** @format int32 */
    size?: number;
    regex?: string;
    /** @format date-time */
    startAt?: string;
    /** @format date-time */
    endAt?: string;
}, choose: Choose) {
    const res = await http.SearchController.search(query)

    choose.data = res.data.payload.rows!
}


export default class Choose implements InitializeComponent {

    private category: string
    private keyword: string
    data: any[]
    store: {
        [key: string]: (data: any) => void
    }

    constructor() {
        this.category = 'course'
        this.keyword = ''
        this.data = []
        this.store = {}
    }

    info(data: any) {
        this.setData(data)
        uni.navigateTo({
            url: `/pages/${this.category}/index/index?id=${data.id}`
        })
    }

    setCategory(category: string) {
        this.category = category;
        query({category, keyword: this.keyword}, this)
    }

    setKeyWork(keyword: string) {
        this.keyword = keyword;
        query({category: this.category, keyword}, this)
    }

    private setData(data: any) {
        this.store[this.category](data)
    }

    init(): void {
        this.store['course'] = useCourseStore().setData
    }
}