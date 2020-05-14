# 目录分析

```
-- .gitignore               // git提交时忽略目录文件
-- .editorconfig            // editor文件配置
-- LICENSE                  // 证书配置
-- README                   // 项目介绍
-- .github                  // github配置文件
      |-- ISSUE_TEMPLATE    // issue模板
      |-- workflows         // CI运行配置目录
            |--plui.yml     // master分支
            |--feature.yml  // dev/* & hotfix/*分支
            |--test.yml     // test分支
-- .vsode                   // vscode配置文件
      |-- setting.json      // 开发插件配置
-- docs                     // 组件库demo文件
-- dev
      |-- tsconfig.json     // typescript配置
      |-- babel.config.js   // babel配置
      |-- vue.config.js     // webpack拓展配置
      |-- package.json      // 项目工程依赖描述
      |-- yarn.lock         // 依赖树，统一使用yarn确保npm包依赖安装一致
      |-- build             // 打包生成的文件
      |-- node_modules      // npm包
      |-- public            // favicon和index.html
      |-- src               // 源码文件
            |-- components  // 组件目录
            |-- config      // 配置目录
            |-- image       // 图片目录
            |-- layout      // 布局组件
            |-- style       // 公共样式
            |-- utils       // 逻辑工具
            |-- Plui.vue    // 组件使用demo主页面
            |-- main.ts     // 项目启动入口
```