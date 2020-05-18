import { Component, ComponentOptions } from 'vue';
import Row from './layout/pl-row.vue';
import Col from './layout/pl-col.vue';

const components = [
  { name: 'pl-row', component: Row },
  { name: 'pl-col', component: Col },
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
