import { createApp } from 'vue';
import App from './App.vue';

// 本地开发dev时使用
// import Plui from './components';

// 验证build产物使用
// @ts-ignore
// import Plui from '../build/@yuo/plui.es.js';
// import '../build/style.css';

// 发版后验证可用性使用
// 不要在本地发版!!!
// 需要发版前 `npm view @yuo/plui version` 看下最新的已存在的版本
// 发版的tag 需要以小写字母v开头 *根据之前的版本来定，修改package.json中的version字段
// 通过打tag方式由CI发版，执行 `git tag v*.*.*` 之后 `git push --tags`
// @ts-ignore 因为没有写@types
import Plui from '@yuo/plui';
import '/@pkg/build/style.css';

// 按需引用
// import { PlCol, PlRow } from './components';
// app
//     .use(PlCol)
//     .use(PlRow);

// 全部引用
const app = createApp(App);

app.use(Plui).mount('#app');
