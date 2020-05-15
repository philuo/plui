<template>
  <div id="app">
    <BaseButton msg="helloWorld"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from './components/button/base-button.vue';

export default defineComponent({
  components: {
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
