import {
  computed, Slots,
  Slot, Component,
} from 'vue';

const getContainerClassList = (props: ContainerProps, slots: Slots) => computed(() => {
  // 如果有设置此属性，优先级最高，直接返回
  if (props.direction === 'x') {
    return '';
  }
  if (props.direction === 'y') {
    return 'is-vertical';
  }
  // 如果没有通过设置属性，判断是否子元素中使用了 header和footer布局组件，若使用则添加is-vertical类
  const flag = (slots.default as Slot)().some((item) => {
    const elementName = (item.type as Component).name;
    return elementName === 'pl-header' || elementName === 'pl-footer';
  });
  if (flag) {
    return 'is-vertical';
  }
  return '';
});

export default getContainerClassList;
