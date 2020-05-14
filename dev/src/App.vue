<template>
  <div id="app">
    <Mouse />
    <Click />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Mouse from './components/pl-mouse.vue';
import Click from './components/pl-click.vue';


export default defineComponent({
  components: {
    Mouse,
    Click,
  },
  setup() {
    return {

    };
  },
});


</script>

<style lang="scss">

</style>
