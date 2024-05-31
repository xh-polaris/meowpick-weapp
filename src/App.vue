<script setup lang="ts">
import { Init } from '@/utils/Init';

onLaunch(() => {
    Init();
    uni.addInterceptor('navigateTo', {
        invoke(e: { url: string }) {
            useRouteStore().setUrl(e.url);
        }
    });
});
onShow(() => {});
onHide(() => {});
</script>
<style lang="scss">
@import 'nutui-uniapp/styles/index';

page {
    width: 100%;
    height: 100%;
}

view {
    box-sizing: border-box;
}

input {
    box-sizing: border-box;
}
</style>
