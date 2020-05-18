<template>
  <div>
    <button class="btn default">{{ msg }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'base-button',
  props: {
    msg: String,
  },
});
</script>

<style lang="scss">
@import url('./css/common.css');
.default:active{
  color: #51a2ff;
  background: #ecf5ff;
  border: 1px solid lightblue;
}
.default:hover{
  color: #51a2ff;
  background: #ecf5ff;
}
</style>
