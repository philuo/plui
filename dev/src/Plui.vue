<template>
    <demo-layout />
    <demo-container />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { demoLayout, demoContainer } from './demo';

export default defineComponent({
  components: {
    demoLayout,
    demoContainer,
  },
});
</script>

<style lang="scss">
@import "./style/common/bg-color";
</style>
