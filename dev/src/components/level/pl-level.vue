<template>
  <div :class="getType">
    <span>Level</span>
    <span>{{ getLevel }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getLevel, getType } from '../../utils/computed/level';

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
  },
  setup(props) {
    return {
      getLevel: getLevel(props),
      getType: getType(props),
    };
  },
});
</script>

<style lang="scss" scope>
@import '../../style/pl-level';
</style>
