import { createApp } from 'vue';
import App from './App.vue';
// import Plogui from './components';

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
