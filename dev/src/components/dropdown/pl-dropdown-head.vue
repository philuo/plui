<!-- pl-dropdown-head @Perfumere -->
<template>
  <div class="pl-dropdown-head">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pl-dropdown-head',
});

</script>

<style lang='scss' scoped>
  @import '../../style/pl-dropdown-head';
</style>
