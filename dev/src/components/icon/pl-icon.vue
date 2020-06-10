<!-- pl-icon @Perfumere -->
<template>
  <i :class="`pl-icon-${name} ${className}`" @click="handleClick"/>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pl-icon',
  props: {
    name: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
  },
  setup(props, ctx) {
    return {
      handleClick: () => ctx.emit('action'),
    };
  },
});
</script>
