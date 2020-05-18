<template>
  <div>
    <button class="btn warning">{{ msg }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'warning-button',
  props: {
    msg: String,
  },
});
</script>

<style lang="scss">
@import url('./css/common.css');
.warning{
  background-color: #E6A23C;
  color: white;
}
.warning:active{
  color: #eaeaea;
  background: rgb(185, 130, 47);
  border: 1px solid rgb(185, 130, 47);
}
.warning:hover{
  color: #eaeaea;
  background: rgb(185, 130, 47);
}
</style>
