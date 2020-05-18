<template>
  <div>
    <button class="btn info">{{ msg }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'info-button',
  props: {
    msg: String,
  },
});
</script>

<style lang="scss">
@import url('./css/common.css');
.info{
  background-color: #909399;
  color: white;
}
.info:active{
  color: #eaeaea;
  background: #727479;
  border: 1px solid #727479;
}
.info:hover{
  color: #eaeaea;
  background: #727479;
}
</style>
