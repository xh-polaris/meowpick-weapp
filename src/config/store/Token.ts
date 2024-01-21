export default defineStore('token-store', {
    unistorage: true,
    state() {
        return {
            token: ""
        }
    },
    actions: {
        setData(token: any) {
            this.token = token
        }
    }
})
