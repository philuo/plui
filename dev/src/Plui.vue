<template>
  <div id="app">
    <demoLel/>
    <!--
    <demoNav/>
    <demoLayout/>
    <demoContainer/>
    -->

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { demoLel } from './demo';

export default defineComponent({
  components: {
    demoLel,
  },
});
</script>

<style lang="scss">

</style>
