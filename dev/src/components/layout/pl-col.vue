<!-- pl-col @Perfumere -->
<template>
  <div class="pl-col"
  :class="getClassList"
  :style="getGutter"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, getCurrentInstance } from 'vue';

export default defineComponent({
  name: 'pl-col',
  props: {
    span: {
      type: [Number, String],
      default: 24,
    },
    gutter: {
      type: [Number, String],
      default: 0,
    },
    offset: {
      type: [Number, String],
      default: 0,
    },
  },
  setup(props) {
    // 获取父元素属性
    const { parent } = getCurrentInstance();
    const { gutter } = parent.props;

    // 元素间隙
    const getGutter = computed(() => {
      const value = +gutter / 2;
      if (value === 0) {
        return '';
      }
      return {
        paddingLeft: `${value}px`,
        paddingRight: `${value}px`,
      };
    });
    // 样式列表
    const getClassList = computed(() => [
      `pl-col-${props.span}`,
      +props.offset ? `pl-col-offset-${props.offset}` : '',
    ]);
    return {
      getGutter,
      getClassList,
    };
  },
});

</script>

<style lang='scss'>
// 浮动处理
[class*=pl-col-] {
    float: left;
    box-sizing: border-box;
}

// 0-24 列等分处理
@mixin colDivide($var,$attr,$begin:0,$end:24){
  @for $i from $begin through $end{
    .#{$var}-#{$i}{
      #{$attr}:100% / 24 * $i;
    }
  }
}
@include colDivide(pl-col-offset-,margin-right);
@include colDivide(pl-col-offset,margin-left);
@include colDivide(pl-col,width);
</style>
