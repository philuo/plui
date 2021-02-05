import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    // 设置别名
    alias: {
        '@': resolve(__dirname, 'src'),
        '/@pkg': resolve(__dirname, 'node_modules/@yuo/plui')
    },
    // 加载默认内置vue插件
    plugins: [vue()],
    // 不压缩vue包代码，节省打包时间，增益开发体验
    optimizeDeps: {
        exclude: ['vue']
    },
    // build时配置
    build: {
        // 打包的目录名
        outDir: resolve(__dirname, 'build'),
        lib: {
            entry: resolve(__dirname, 'src/components/index.ts'),
            formats: ['es'],
            name: 'Plui'
        },
        // build时排除vue，仅提交源码
        rollupOptions: {
            external: ['vue'],
            output: {
                // 外部依赖包名
                globals: {
                    vue: 'vue'
                },
                // 同时存在按需加载和全局引用方式打包
                exports: 'named'
            }
        }
    },
    // css预编译语言
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$injectedColor: orange;`
            }
        }
    },
    server: {
        hmr: {
            overlay: false
        }
    }
});
