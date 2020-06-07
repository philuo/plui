import { createApp } from 'vue';
import Plui from './Plui.vue';
import Plogui from './components';
// 按需引用
import { PlCol, PlRow, PlButton } from './components';
// import { PlCol, PlRow } from './components';
// 全部引用

const app = createApp(Plui);
app.use(PlRow)
  .use(PlCol)
  .use(PlButton)
  .use(Plogui)
  .mount('#app');
