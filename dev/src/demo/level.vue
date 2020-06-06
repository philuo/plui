<template>
  <div class="flex">
    <pl-level level="8" type="default"/>
    <pl-level level="10" type="sky"/>
    <pl-level level="15" type="dark"/>
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
</style>
