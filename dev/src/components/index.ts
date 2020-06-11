import { Component, ComponentOptions } from 'vue';
import '../style/common/index.scss';

// 布局组件
import Row from './layout/pl-row.vue';
import Col from './layout/pl-col.vue';
import Container from './container/pl-container.vue';
import Header from './container/pl-header.vue';
import Main from './container/pl-main.vue';
import Footer from './container/pl-footer.vue';
import Aside from './container/pl-aside.vue';
// 排版组件
import Menu from './menu/pl-menu.vue';
import MenuItem from './menu/pl-menu-item.vue';
import Nav from './nav/pl-nav.vue';

// 功能组件
import Button from './button/pl-button.vue';
import ButtonGroup from './button/pl-button-group.vue';
import Search from './search/pl-search.vue';
import Icon from './icon/pl-icon.vue';

const components = [
  // 布局组件
  { name: 'pl-row', component: Row },
  { name: 'pl-col', component: Col },
  { name: 'pl-container', component: Container },
  { name: 'pl-header', component: Header },
  { name: 'pl-footer', component: Footer },
  { name: 'pl-main', component: Main },
  { name: 'pl-aside', component: Aside },
  // 排版组件
  { name: 'pl-menu', component: Menu },
  { name: 'pl-menu-item', component: MenuItem },
  { name: 'pl-nav', component: Nav },
  // 功能组件
  { name: 'pl-button', component: Button },
  { name: 'pl-button-group', component: ButtonGroup },
  { name: 'pl-search', component: Search },
  { name: 'pl-icon', component: Icon },
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
// 排版组件
export const PlContainer = {
  install(Vue: ComponentOptions) {
    Vue.component('pl-container', Container);
  },
};
export const PlHeader = {
  install(Vue: ComponentOptions) {
    Vue.component('pl-header', Header);
  },
};
export const PlFooter = {
  install(Vue: ComponentOptions) {
    Vue.component('pl-footer', Footer);
  },
};
export const PlAside = {
  install(Vue: ComponentOptions) {
    Vue.component('pl-aside', Aside);
  },
};
export const PlMain = {
  install(Vue: ComponentOptions) {
    Vue.component('pl-main', Main);
  },
};

// 功能组件
export const PlButton = {
  install(Vue: ComponentOptions) {
    Vue.component('pl-button', Button);
  },
};
export const PlButtonGroup = {
  install(Vue: ComponentOptions) {
    Vue.component('pl-button-group', ButtonGroup);
  },
};
export const PlMenu = {
  install(Vue: ComponentOptions) {
    Vue.component('pl-menu', Menu);
  },
};
export const PlMenuItem = {
  install(Vue: ComponentOptions) {
    Vue.component('pl-menu-item', MenuItem);
  },
};
export const PlNav = {
  install(Vue: ComponentOptions) {
    Vue.component('pl-nav', Nav);
  },
};
export const PlSearch = {
  install(Vue: ComponentOptions) {
    Vue.component('pl-search', Search);
  },
};
export const PlIcon = {
  install(Vue: ComponentOptions) {
    Vue.component('pl-icon', Icon);
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
