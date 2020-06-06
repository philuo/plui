<template>
    <demo-layout />
    <demo-container />
    <demo-menu />
    <demo-button />
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
@import "./style/common/bg-color";
</style>
