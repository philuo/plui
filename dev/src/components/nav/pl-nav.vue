<!-- pl-nav @Perfumere -->
<template>
<nav class="pl-nav">
  <slot />
</nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pl-nav',
});

</script>

<style lang='scss' scoped>
  @import '../../style/pl-nav';
</style>
