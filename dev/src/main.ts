import { createApp } from 'vue';
import App from './App.vue';

// (1) 本地开发yarn dev时使用
import Plui from './components';

// (2) 发版前验证build产物使用
// @ts-ignore
// import Plui from '../build/@yuo/plui.es.js';
// import '../build/style.css';

// (3) 发版后验证可用性使用
// import Plui from '@yuo/plui';
// import '/@pkg/build/style.css';

// 按需引用
// import { PlCol, PlRow } from './components';
// app
//     .use(PlCol)
//     .use(PlRow);

// 全部引用
const app = createApp(App);

app.use(Plui).mount('#app');
