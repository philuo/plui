<template>
  <div class="demo-level">
    <h2>Level</h2>
    <div class="flex">
      <pl-level level="8" type="default" msg="msg"/>
      <pl-level level="10" type="sky"/>
      <pl-level level="15" type="dark"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'demo-level',
});
</script>

<style lang="scss">
.flex{
  display: flex;
  justify-content: space-around;
}
.demo-level{
  width:70%;
  margin:20px auto;
  box-shadow:0 0 28px #eee;
  padding:40px;
}
</style>
