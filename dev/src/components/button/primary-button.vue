<template>
  <div>
    <button class="btn primary">{{ msg }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'primary-button',
  props: {
    msg: String,
  },
});
</script>

<style lang="scss">
@import url('./css/common.css');
.primary{
  background-color: #07c160;
  color: white;
}
.primary:active{
  color: #eaeaea;
  background: #06ae57;
  border: 1px solid #06ae57;
}
.primary:hover{
  color: #eaeaea;
  background: #06ae57;
}
</style>
