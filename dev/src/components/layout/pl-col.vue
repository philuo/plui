<!-- pl-col @Perfumere -->
<template>
  <div class="pl-col"
  :class="getColClassList"
  :style="getGapper"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
import { getGapper, getColClassList } from '../../utils/computed/layout';

export default defineComponent({
  name: 'pl-col',
  props: {
    // 占用栏数
    span: {
      type: [Number, String],
      default: 24,
    },
    // 元素间隔
    gutter: {
      type: [Number, String],
      default: 0,
    },
    // 左右偏移
    offset: {
      type: [Number, String],
      default: 0,
    },
    // 浮动偏移
    move: {
      type: [Number, String],
      default: 0,
    },
    // 响应式
    xs: {
      type: [Number, String, Object],
      default: '',
    },
    sm: {
      type: [Number, String, Object],
      default: '',
    },
    md: {
      type: [Number, String, Object],
      default: '',
    },
    lg: {
      type: [Number, String, Object],
      default: '',
    },
    xl: {
      type: [Number, String, Object],
      default: '',
    },
  },
  setup(props) {
    return {
      getGapper: getGapper(getCurrentInstance().parent.props),
      getColClassList: getColClassList(props),
    };
  },
});
</script>

<style lang='scss'>
@import '../../style/pl-col';
</style>
