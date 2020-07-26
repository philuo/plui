<template>
    <demo-menu />
    <div class="overflow-view">
      <demo-layout />
      <demo-container />
      <demo-button />
      <demo-dropdown />
      <demo-lev />
      <demo-nav />
      <demoRadio />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  demoLayout, demoContainer, demoMenu, demoButton, demoLev, demoNav, demoDropdown,
  demoRadio,
} from './demo';

export default defineComponent({
  components: {
    demoLayout,
    demoContainer,
    demoMenu,
    demoButton,
    demoLev,
    demoNav,
    demoDropdown,
    demoRadio,
  },
});
</script>
<style lang="scss">
.overflow-view{
  height: calc(100vh - 58px);
  overflow: auto;
}
</style>
