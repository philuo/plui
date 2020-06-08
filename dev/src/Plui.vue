<template>
  <div>
      <demo-layout />
      <demo-container />
      <demo-menu />
      <demo-button />
      <demo-lev />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  demoLayout, demoContainer, demoMenu, demoButton, demoLev,
} from './demo';

export default defineComponent({
  components: {
    demoLayout,
    demoContainer,
    demoMenu,
    demoButton,
    demoLev,
  },
});
</script>

<style lang="scss">
@import "./style/common/bg-color";
</style>
