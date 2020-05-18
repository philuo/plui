<template>
  <button></button>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'load-button',
  props: {
    loading: String,
    type: String,
    loading-type: String,
    loading-text:String
  },
  setup() {
    const state = reactive({

    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss">
@import url('css/commin.css');
</style>
