import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    // 加载默认内置vue插件
    plugins: [vue()],
    // build时排除vue，仅提交源码
    optimizeDeps: {
        exclude: ['vue']
    },
    // build时配置
    build: {
        // 打包的目录名
        outDir: resolve(__dirname, 'build'),
        // 资源文件相对于打包目录的目录名 /build/dist
        assetsDir: 'dist'
    },
    // css预编译语言
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$injectedColor: orange;`
            }
        }
    }
});
