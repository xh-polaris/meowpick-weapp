import {defineConfig} from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from 'unplugin-auto-import/vite'
import VComponents from 'unplugin-vue-components/vite'
import Components from '@uni-helper/vite-plugin-uni-components'
import { NutResolver } from 'nutui-uniapp'

export default defineConfig({
    css: {
        postcss: {
            plugins: [
                require("tailwindcss"), require("autoprefixer")
            ]
        },
        preprocessorOptions: {
            scss: {
                additionalData: '@import "nutui-uniapp/styles/variables.scss";',
            },
        },
    },
    plugins: [
        VComponents(),
        Components({
            resolvers: [NutResolver()],
        }),
        AutoImport({
            imports: [
                'vue',
                'uni-app',
                'pinia',
            ],
            dirs: [
                'src/**/index.ts',
                'src/api/*.ts'
            ],
        }),
        uni(),
    ],
});