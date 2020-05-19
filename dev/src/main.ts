import { createApp } from 'vue';
import Plui from './Plui.vue';
// 按需引用
import { PlCol, PlRow, PlButton } from './components';
// 全部引用
// import Plogui from './components';
// app.use(Plogui);

const app = createApp(Plui);
app.use(PlRow)
  .use(PlCol)
  .use(PlButton)
  .mount('#app');
