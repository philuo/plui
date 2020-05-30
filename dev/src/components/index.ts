import { Component, ComponentOptions } from 'vue';
// 布局组件
import Row from './layout/pl-row.vue';
import Col from './layout/pl-col.vue';
import Container from './container/pl-container.vue';
import Header from './container/pl-header.vue';
import Main from './container/pl-main.vue';
import Footer from './container/pl-footer.vue';
import Aside from './container/pl-aside.vue';

const components = [
  { name: 'pl-row', component: Row },
  { name: 'pl-col', component: Col },
  { name: 'pl-container', component: Container },
  { name: 'pl-header', component: Header },
  { name: 'pl-footer', component: Footer },
  { name: 'pl-main', component: Main },
  { name: 'pl-aside', component: Aside },
];

/**
 * 按需引用
 * import { PlRow } from 'plogui';
 * app.use(PlRow);
 */
export const PlRow = {
  install(Vue: ComponentOptions) {
    Vue.component('pl-row', Row);
  },
};
export const PlCol = {
  install(Vue: ComponentOptions) {
    Vue.component('pl-col', Col);
  },
};


/**
 * 全部引用
 * import Plui from 'plogui';
 * app.use(Plui);
 */

export default {
  install(Vue: ComponentOptions) {
    components.forEach((
      item: { name: string; component: Component },
    ) => Vue.component(item.name, item.component));
  },
};
