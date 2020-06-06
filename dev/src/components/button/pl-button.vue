<!-- pl-button @Perfumere -->
<template>
  <button @click="handleClick" type="button"
  class="pl-button"
  :class="getButtonClassList"
  :disabled="disabled || loading"
  :autofocus="autofocus">
    <i class="pl-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span><slot></slot></span>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { handleClick, getButtonClassList } from '../../utils/computed/button';

export default defineComponent({
  name: 'pl-button',
  props: {
    type: {
      type: String,
      default: 'default', // 将plain的default命名为text
    },
    size: {
      type: String,
      default: 'md', // xs sm md lg xl
    },
    icon: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    return {
      handleClick: handleClick(ctx),
      getButtonClassList: getButtonClassList(props),
    };
  },
});

</script>

<style lang='scss' scoped>
  @import '../../style/pl-button';
</style>
