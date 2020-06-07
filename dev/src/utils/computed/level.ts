import { computed } from 'vue';
/**
 * @memberof Component<pl-level>
 * @author XuDong<987343689@qq.com>
 * @function 获取等级
 */
const getLevel = (props: Level) => computed(() => props.level);
/**
 * @memberof Component<pl-level>
 * @author XuDong<987343689@qq.com>
 * @function 获取主题样式类型
 */
const getType = (props: Type) => computed(() => props.type);
/**
 * @memberof Component<pl-level>
 * @author XuDong<987343689@qq.com>
 * @function 获取文本文字
 */
const getMsg = (props: Msg) => computed(() => props.msg);

export {
  getLevel,
  getType,
  getMsg,
};
