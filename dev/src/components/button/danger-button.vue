<template>
  <div>
   <button class="btn danger">{{ msg }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'danger-button',
  props: {
    msg: String,
  },
});
</script>

<style lang="scss">
@import url('./css/common.css');
.danger{
  background-color: rgb(236, 26, 26);
  color: white;
}
.danger:active{
  color: #eaeaea;
  background-color: #ce280a;
  border: 1px solid #ce280a;
}
.danger:hover{
  color: #eaeaea;
  background: #ce280a;
}
</style>
