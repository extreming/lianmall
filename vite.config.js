import { fileURLToPath, URL } from 'node:url'
import postcssPxToViewport from 'postcss-px-to-viewport'


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                additionalData: `@import "/src/assets/common.less";`,
            },
        },
        postcss: {
            plugins: [
                postcssPxToViewport({
                    viewportWidth: 375
                })
            ]
        }
    },
})
