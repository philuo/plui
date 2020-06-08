<!-- pl-aside @Perfumere -->
<template>
  <aside class="pl-aside" :style="{ width }">
    <slot />
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: '',
  props: {
    width: {
      type: String,
      default: '120px',
    },
  },
});

</script>

<style lang='scss' scoped>
@import '../../style/pl-aside';
</style>
