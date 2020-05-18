import { createApp } from 'vue';
import Plui from './Plui.vue';
// 按需引用
import { PlCol, PlRow } from './components';
// 全部引用
// import Plogui from './components';
// app.use(Plogui);

const app = createApp(Plui);
app.use(PlRow)
  .use(PlCol)
  .mount('#app');
