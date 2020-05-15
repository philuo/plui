<template>
  <div id="app">
    <Mouse />
    <Click />
    <BaseButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Mouse from './components/pl-mouse.vue';
import Click from './components/pl-click.vue';
import BaseButton from './components/button/base-button.vue';

export default defineComponent({
  components: {
    Mouse,
    Click,
    BaseButton,
  },
  setup() {
    return {

    };
  },
});


</script>

<style lang="scss">

</style>
