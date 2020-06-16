import {
  ref, reactive, SetupContext,
} from 'vue';
import { DOM_CHANGE_TIMEOUT } from '../../config/constant';

/**
 * @function 获取到需要在select显示的项
 * @description 通过items属性子项中的checked字段
 */
const _getSelectItem = (items: SearchProps['items']): SearchDescriptionItem => {
  let targetItem = {
    description: items[0].description,
    index: 0,
  };
  items.every((item, index) => {
    if (item.checked) {
      targetItem = {
        description: item.description,
        index,
      };
      return false;
    }
    return true;
  });
  return targetItem;
};

/**
 * @function 获取到需要在select组,选择菜单内容
 * @description 通过items属性子项中的description字段
 */
const _getSelectGroup = (items: SearchProps['items'], filter = true): SearchGroup => {
  const res = items.map((item, index) => {
    item.index = index;
    return item;
  });
  if (filter) {
    return res.filter(item => !item.checked);
  }
  return res;
};

/**
 * @function setup(props,context){ ... }
 * @descrition 启动器
 */
const setup = (props: SearchProps, ctx: SetupContext) => {
  // 初始化，通过视图的交互更新值
  const open = ref(false);
  const searchPanel = ref(false);
  const selectItem = reactive(_getSelectItem(props.items));
  const selectGroup = reactive(_getSelectGroup(props.items));
  const selectItems = reactive(_getSelectGroup(props.items, false));
  // 输入框右侧🔍搜索icon的引用
  const searchIcon = ref<HTMLElement>();
  // 处理器，通过处理器处理点击失焦等事件
  const handleClick = () => {
    open.value = !open.value;
  };
  const handleBlur = () => {
    // 失焦后延迟消失，立即消失会导致ul中的选项不可点击导致handleSelect处理器失效
    setTimeout(() => {
      open.value = false;
    }, DOM_CHANGE_TIMEOUT);
  };
  const handleInput = ({ target }: {target: HTMLInputElement}) => {
    ctx.emit('write', target.value);
  };
  const handelEnter = (event: KeyboardEvent) => {
    if (event.keyCode === 13) {
      ctx.emit('search');
    }
  };
  const handleConfirm = () => {
    ctx.emit('search');
  };
  const handleSelect = (item: SearchItem, ins: number) => {
    // 将对应的项回传父元素 上一项old,即将调换的项new
    ctx.emit('select', { oldItem: selectItems[selectItem.index], newItem: selectItems[item.index] });
    // 搜索框对应改变
    selectItems[item.index].checked = true;        // 新项被调上
    selectItems[selectItem.index].checked = false; // 旧项被调下
    // select调换两项
    selectGroup.splice(ins, 1, selectItems[selectItem.index]);
    // 上调新项
    selectItem.index = item.index;
    selectItem.description = item.description;
  };
  // 输入框聚焦和失焦时的拉伸动画
  const handleInputFocus = ({ target }: { target: HTMLElement}) => {
    target.style.width = '90%';
    (target.parentNode as HTMLElement).style.width = '358px';
    (searchIcon.value as HTMLElement).style.fontWeight = 'bold';
    (searchIcon.value as HTMLElement).style.transform = 'scale(1.2)';
    searchPanel.value = true;
  };
  const handleInputBlur = ({ target }: { target: HTMLElement }) => {
    setTimeout(() => {
      target.style.width = '86%';
      (target.parentNode as HTMLElement).style.width = '280px';
    }, DOM_CHANGE_TIMEOUT);
    (searchIcon.value as HTMLElement).style.fontWeight = 'normal';
    (searchIcon.value as HTMLElement).style.transform = '';
    setTimeout(() => { searchPanel.value = false; }, DOM_CHANGE_TIMEOUT);
  };
  const handlePanelClick = (item: SearchPanelItem) => {
    ctx.emit('query', item);
    const element = ((searchIcon.value as HTMLElement).parentNode as HTMLElement);
    (element.querySelector('.is-show') as HTMLInputElement).value = item.description;
  };
  return {
    open,
    searchIcon,
    searchPanel,
    selectItem,
    selectItems,
    selectGroup,
    handleClick,
    handleBlur,
    handleSelect,
    handleInput,
    handleConfirm,
    handelEnter,
    handleInputFocus,
    handleInputBlur,
    handlePanelClick,
  };
};


export default setup;
