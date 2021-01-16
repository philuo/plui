# 目录分析

```
-- .gitignore                             // git提交时忽略目录文件
-- .editorconfig                          // editor文件配置
-- vetur.config.js                        // vscode的vetur插件配置
-- LICENSE                                // 项目证书
-- README                                 // 项目介绍
-- .github                                // github配置文件
      |-- ISSUE_TEMPLATE                  // issue模板
      |-- workflows                       // CI运行配置目录
            |--plui.yml                   // 主干CI
            |--feature.yml                // 开发CI
            |--publish_*.yml              // 发包CI
-- .vsode                                 // vscode配置文件
      |-- settings.json                   // 开发插件配置
-- docs                                   // 组件库demo文件
-- dev
      |-- LICENSE                         // @yuo/plui证书
      |-- README                          // @yuo/plui介绍
      |-- tsconfig.json                   // typescript配置
      |-- .eslintrc.js                    // eslint配置
      |-- .eslintignore                   // eslint忽略配置
      |-- .npmignore                      // npm打包忽略配置
      |-- postcss.config.js               // prettier配置
      |-- prettier.config.js              // prettier配置
      |-- vite.config.ts                  // vite配置
      |-- package.json                    // 项目工程依赖描述
      |-- yarn.lock                       // 依赖树，确保yarn依赖安装一致
      |-- build                           // 打包生成的文件
      |-- node_modules                    // 安装依赖目录
      |-- public                          // 打包不依赖的静态资源
      |-- src                             // 源码文件
            |-- components                // 组件目录
                  |-- index.ts            // 组件引用入口
                  |-- *                   // 某个组件
                        |-- index.ts      // 组件逻辑
                        |-- *.ts          // 子组件逻辑
            |-- demo                      // 组件case目录
            |-- config                    // 配置目录
            |-- assets                    // 静态资源
                  |-- fonts               // 字体及其描述html文档
                  |-- image               // 组件依赖的图片
            |-- style                     // 样式表
            |-- utils                     // 通用工具
            |-- App.vue                   // 组件使用demo主页面
            |-- main.ts                   // 项目启动入口
```
