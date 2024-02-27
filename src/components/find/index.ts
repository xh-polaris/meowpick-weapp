import Index from "@/pages/find/choose/index.vue";

function getText(input: InPut): string {
    return input.searchText.length ? input.searchText : input.placeHolder
}

function getPlaceholder(input: InPut) {
    http.SearchController.guess().then(res => {
        input.placeHolder = res.data.payload
    })
}

function getSearchHistory(input: InPut) {
    http.SearchController.recent().then(res => {
        input.searchHistory = res.data.payload
    })
}

export default class InPut implements InitializeComponent {
    init(): void {
        getPlaceholder(this);
        getSearchHistory(this);
    }

    public searchText: string
    public placeHolder: string
    public list: any[]
    public searchHistory: any[]

    constructor() {
        this.searchText = ''
        this.placeHolder = ''
        this.list = []
        this.searchHistory = []
    }

    query() {
        return getText(this)
    }

    suggest() {
        console.log('suggest', this.searchText)
    }
}