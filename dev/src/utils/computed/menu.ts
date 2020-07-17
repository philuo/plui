import {
  computed, Slots,
  Slot, Component,
} from 'vue';

const isMenuItem = (slots: Slots) => computed(() => {
  // 子元素是否全部为pl-menu-item，如果返回值为false则显示占位组件
  if (typeof slots.default === 'function') {
    return (slots.default as Slot)().every((item) => {
      const elementName = (item.type as Component).name;
      return elementName === 'pl-menu-item';
    });
  }
  return false;
});

export {
  isMenuItem,
};
