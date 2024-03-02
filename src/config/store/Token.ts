export default defineStore('token-store', {
    unistorage: true,
    state() {
        return {
            token: ""
        }
    },
    actions: {
        store(token: string) {
            this.token = token
        }
    }
})
