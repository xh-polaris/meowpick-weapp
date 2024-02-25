Component({
    data: {
        active: 2,
        list: [
            {url: "/pages/index/index/index", icon: "home-o", "text": "", disable: true},
            {url: "/pages/group/index/index", icon: "friends-o", "text": "", disable: true},
            {url: "/pages/find/index/index", icon: "search", "text": "", disable: false},
            {url: "/pages/message/index/index", icon: "envelop-o", "text": "", disable: true},
            {url: "/pages/user/index/index", icon: "user-o", "text": "", disable: true}
        ]
    },
    methods: {
        onChange(e) {
            if (this.data.list[e.detail].disable) return

            wx.switchTab({
                url: this.data.list[e.detail].url
            });
            this.setData({active: e.detail});
        },
        init() {

        }
    }
});