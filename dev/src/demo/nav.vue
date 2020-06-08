<template>
  <div class="demo-menu">
    <h2>Nav</h2>
    <div class="flex">
      <pl-nav />
      asd
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'demo-nav',
});
</script>

<style lang="scss">
.flex{
  display: flex;
  justify-content: space-around;
}
.demo-menu{
  width:70%;
  margin:20px auto;
  box-shadow:0 0 28px #eee;
  padding:40px;
}
</style>
