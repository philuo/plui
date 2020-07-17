<!--  -->
<template>
  <div>
    <ul :class="[direction,type]">
      <!--<li v-for="(item,index) in getList" :key="index">{{ item }}</li>-->
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getList, getDirection, getType } from '../../utils/computed/navList';

export default defineComponent({
  name: 'pl-nav-list',
  // props: {
  //   list: {
  //     type: [String],
  //     default: '',
  //   },
  //   direction: {
  //     type: String,
  //     default: 'row',
  //   },
  //   type: {
  //     type: String,
  //     default: 'default',
  //   },
  // },
  // setup(props) {
  //   return {
  //     getList: getList(props),
  //     getDirection: getDirection(props),
  //     getType: getType(props),
  //   };
  // },
});

</script>

<style lang='scss' scoped>
@import '../../style/pl-nav-list';
</style>
