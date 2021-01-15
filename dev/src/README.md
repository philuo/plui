# 使用方法

## 推荐使用yarn 安装
```bash
yarn add @yuo/plui
```

## 仅支持Esmodule模块
```js
// main.js
import { createApp } from 'vue';
const app = createApp();

// 导入样式类
import '../node_modules/@yuo/plui/build/style.css';

// 全部引入
// import Plui from '@yuo/plui';
// app.use(Plui);

// 按需引入
import {
    PlCol,
    PlRow
} from '@yuo/plui';

app
    .use(PlCol);
    .use(PlRow);

// 目前没有写typings，需要禁掉引入时的ts规则
// @ts-ignore
// import {
//     PlCol,
//     PlRow
// } from '@yuo/plui';

// @ts-ignore
// import Plui from '@yuo/plui';
```