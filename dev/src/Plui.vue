<template>
  <div>
      <demo-layout />
      <demo-container />
      <demo-menu />
      <demo-button />
      <demo-lev />
      <demo-nav />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  demoLayout, demoContainer, demoMenu, demoButton, demoLev, demoNav,
} from './demo';

export default defineComponent({
  components: {
    demoLayout,
    demoContainer,
    demoMenu,
    demoButton,
    demoLev,
    demoNav,
  },
});
</script>

<style lang="scss">
@import "./style/common/bg-color";
</style>
