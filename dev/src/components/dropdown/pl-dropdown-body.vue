<!-- pl-dropdown-body @Perfumere -->
<template>
  <div class="pl-dropdown-body" >
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pl-dropdown-body',
});

</script>

<style lang='scss' scoped>
  @import '../../style/pl-dropdown-body';
</style>
