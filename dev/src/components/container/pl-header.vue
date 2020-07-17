<!-- pl-header @Perfumere -->
<template>
  <header class="pl-header" :style="{ height }">
    <slot />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pl-header',
  props: {
    height: {
      type: String,
      default: '52px',
    },
  },
});

</script>

<style lang='scss' scoped>
@import '../../style/pl-header';
</style>
