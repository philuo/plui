<!-- pl-card @Perfumere -->
<template>
  <div class="pl-card">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pl-card',
});

</script>

<style lang='scss' scoped>
  @import '../../style/pl-card';
</style>
