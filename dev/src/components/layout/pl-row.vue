<!-- pl-row @Perfumere -->
<template>
  <div
  :class="getRowClassList"
  :style="getGutter">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getGutter, getRowClassList } from '../../utils/computed/layout';

export default defineComponent({
  name: 'pl-row',
  props: {
    // 元素间隙
    gutter: {
      type: [Number, String],
      default: 0,
    },
    // 设置flex
    type: {
      type: String,
      default: '',
    },
    // 水平排列方式
    justify: {
      type: String,
      default: '',
    },
    // 垂直排列方式
    align: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    return {
      getGutter: getGutter(props),
      getRowClassList: getRowClassList(props),
    };
  },
});
</script>

<style lang='scss'>
@import '../../style/pl-row';
</style>
