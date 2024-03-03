import {createSSRApp} from "vue";
import App from "./App.vue";
import * as Pinia from 'pinia';
import {createUnistorage} from 'pinia-plugin-unistorage'

// import "tailwindcss/tailwind.css"
import './main.scss'

function hasPermission(url: string) {
    for (let open of ['/pages/user/Login/index']) {
        if (url.startsWith(open)) {
            return true;
        }
    }

    return useTokenStore().token != '';
}

["navigateTo", "redirectTo", "reLaunch", "switchTab"].forEach((item) => {
    uni.addInterceptor(item, {
        // 页面跳转前进行拦截, invoke根据返回值进行判断是否继续执行跳转
        invoke(e) {
            console.log(e)
            if (!hasPermission(e.url)) {
                uni.hideHomeButton()
                uni.redirectTo({
                    url: `/pages/user/Login/index?url=${e.url}`,
                });

                return false;
            }
            return true;
        }
    });
})

export function createApp() {
    const app = createSSRApp(App);
    const pinia = Pinia.createPinia()
    pinia.use(createUnistorage())
    app.use(pinia);

    return {
        app,
        Pinia
    };
}
