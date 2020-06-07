<!-- demo-menu @Perfumere -->
<template>
  <div class="demo-menu">
    <h2>Typeset Menu</h2>
    <pl-menu>
      <div></div>
      <pl-menu-item>123</pl-menu-item>
      <pl-menu-item>123</pl-menu-item>
    </pl-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'demo-menu',
});

</script>

<style lang='scss' scoped>
.demo-menu{
  width:70%;
  margin:20px auto;
  box-shadow:0 0 28px #eee;
  padding:40px;
}
</style>
