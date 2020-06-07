<template>
  <div id="app">
    <demoLel/>
    <demoNav/>
    <!--
    <demoLayout/>
    <demoContainer/>
    -->

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { demoLel, demoNav } from './demo';

export default defineComponent({
  components: {
    demoLel, demoNav,
  },
});
</script>

<style lang="scss">

</style>
