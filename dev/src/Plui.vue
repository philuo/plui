<template>
  <div id="app">
    <demoLel/>
    <demoNav/>
    <!--
    <demoLayout/>
    <demoContainer/>
    -->
    <demo-layout/>
    <demo-container/>
    <demo-menu/>
    <demo-button/>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  demoLel,
  demoNav,
  demoLayout,
  demoContainer,
  demoMenu,
  demoButton,
} from './demo';

export default defineComponent({
  components: {
    demoLayout,
    demoContainer,
    demoMenu,
    demoButton,
    demoLel,
    demoNav,
  },
});
</script>

<style lang="scss">

</style>
