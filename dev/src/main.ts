import { createApp } from 'vue';
import Plui from './Plui.vue';
import Plogui from './components';
// 按需引用
<<<<<<< HEAD
import { PlCol, PlRow, PlButton } from './components';
=======
// import { PlCol, PlRow } from './components';
>>>>>>> afbd0ebd86b40eb802a27dd6dafbbe8208264da6
// 全部引用

const app = createApp(Plui);
<<<<<<< HEAD
app.use(PlRow)
  .use(PlCol)
  .use(PlButton)
=======
app.use(Plogui)
>>>>>>> afbd0ebd86b40eb802a27dd6dafbbe8208264da6
  .mount('#app');
