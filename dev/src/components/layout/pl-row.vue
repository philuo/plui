<!-- pl-row @Perfumere -->
<template>
  <div
  :class="getClassList"
  :style="getGutter">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'pl-row',
  props: {
    gutter: {
      type: [Number, String],
      default: 0,
    },
    type: {
      type: String,
      default: '',
    },
    justify: {
      type: String,
      default: '',
    },
    align: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    // 元素间隙
    const getGutter = computed(() => {
      const value = -props.gutter / 2;
      if (value === 0) {
        return '';
      }
      return {
        marginLeft: `${value}px`,
        marginRight: `${value}px`,
      };
    });

    // 样式列表
    const getClassList = computed(() => [
      'pl-row',
      `${props.type && props.type === 'flex' ? 'pl-row--flex' : ''}`,
      `${props.justify && [
        'start',
        'end',
        'center',
        'space-between',
        'space-around',
      ].includes(props.justify) ? `is-justify-${props.justify}` : ''}`,
      `${props.align && [
        'start',
        'end',
        'center',
      ].includes(props.align) ? `is-align-${props.align}` : ''}`,
    ]);

    // 响应属性
    return {
      getGutter,
      getClassList,
    };
  },
});
</script>

<style lang='scss'>
// 通过clear:both和display:block获取子元素高度
.pl-row{
  box-sizing: border-box;
}
.pl-row:after{
  clear:both;
}
.pl-row:before,.pl-row:after{
  display: block;
  content: "";
}

// 设置flex布局
.pl-row--flex:after,
.pl-row--flex:before {
    display: none
}
.pl-row--flex{
  display: flex;
}
// 水平排布
.pl-row--flex.is-justify-start{
  justify-content:flex-start;
}
.pl-row--flex.is-justify-end{
  justify-content: flex-end;
}
.pl-row--flex.is-justify-center{
  justify-content: center;
}
.pl-row--flex.is-justify-space-between{
  justify-content: space-between;
}
.pl-row--flex.is-justify-space-around{
  justify-content: space-around;
}
// 垂直排布
.pl-row--flex.is-align-start{
   align-items: flex-start;
}
.pl-row--flex.is-align-center{
   align-items: center;
}
.pl-row--flex.is-align-end{
   align-items: flex-end;
}

</style>
