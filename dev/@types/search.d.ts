/**
 * pl-search组件的props
 */
declare type SearchProps = Readonly<{
  items: SearchItem[];
}>


/**
 * 父元素传入的完整的数组子项
 */
declare type SearchItem = {
  placeholder: string;
  name: string;
  description: string;
  checked: boolean;
  index: number;
};

/**
 * 父元素传入的，过滤后的选择组
 */
declare type SearchGroup = SearchItem[];

/**
 * 当前被选中描述项
 */
declare type SearchDescriptionItem = {
  description: string;
  index: number;
};
