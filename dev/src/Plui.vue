<template>
  <div>
    <demo-layout />
    <demo-container />
    <demo-menu />
    <demo-button />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  demoLayout, demoContainer, demoMenu, demoButton,
} from './demo';

export default defineComponent({
  components: {
    demoLayout,
    demoContainer,
    demoMenu,
    demoButton,
  },
});
</script>

<style lang="scss">

</style>
