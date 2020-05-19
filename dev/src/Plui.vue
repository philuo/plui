<template>
  <div id="app">
    <demo-layout />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { demoLayout } from './demo';

export default defineComponent({
  components: {
    demoLayout,
  },
});
</script>

<style lang="scss" scoped>
@import "./style/common/bg-color";
</style>
