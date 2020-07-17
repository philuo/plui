import { computed } from 'vue';
/**
 * @memberof Component<pl-navList>
 * @author XuDong<987343689@qq.com>
 * @function 获取列表
 */
const getList = (props: List) => computed(() => {
  console.log(props.list);
  return props.list.toString().split(',');
});
/**
 * @memberof Component<pl-navList>
 * @author XuDong<987343689@qq.com>
 * @function 获取nav方向
 */
const getDirection = (props: Direction) => computed(() => props.direction);
/**
 * @memberof Component<pl-navList>
 * @author XuDong<987343689@qq.com>
 * @function 获取nav类型
 */
const getType = (props: Type) => computed(() => props.type);
export {
  getList,
  getDirection,
  getType,
};
