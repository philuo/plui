
<!-- pl-footer @Perfumere -->
<template>
  <footer class="pl-footer" :style="{ height }">
    <slot />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pl-footer',
  props: {
    height: {
      type: String,
      default: '52px',
    },
  },
});

</script>

<style lang='scss' scoped>
@import '../../style/pl-footer';
</style>
