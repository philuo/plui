<template>
  <div :class="getType">
    <span>{{ getMsg }}</span>
    <span>{{ getLevel }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getLevel, getType, getMsg } from '../../utils/computed/level';

export default defineComponent({
  name: 'pl-level',
  props: {
    level: {
      type: String,
      default: '0',
    },
    type: {
      type: String,
      default: 'default',
    },
    msg: {
      type: String,
      default: 'level',
    },
  },
  setup(props) {
    return {
      getMsg: getMsg(props),
      getLevel: getLevel(props),
      getType: getType(props),
    };
  },
});
</script>

<style lang="scss" scope>
@import '../../style/pl-level';
</style>
