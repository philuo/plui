<!-- pl-menu @Perfumere -->
<template>
<ul class="pl-menu">
  <template v-if="isMenuItem">
    <slot />
  </template>
  <template v-else>
  <!-- 子组件中含有非pl-menu-item项，渲染以下默认占位 -->
      <li class="pl-menu-item pl-menu-logo">PLog</li>
      <li class="pl-menu-item pl-menu-search">Search...</li>
      <li class="pl-menu-item pl-menu-icons">
        <div class="menu-item-icon-0">menu-item-icon-0</div>
        <div class="menu-item-icon-1">menu-item-icon-1</div>
        <div class="menu-item-icon-2">menu-item-icon-2</div>
      </li>
      <li class="pl-menu-item pl-menu-upload">
      </li>
  </template>
</ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { isMenuItem } from '../../utils/computed/menu';

export default defineComponent({
  name: 'pl-menu',
  setup(props, { slots }) {
    return {
      isMenuItem: isMenuItem(slots),
    };
  },
});

</script>

<style lang='scss' scoped>
  @import '../../style/pl-menu';
</style>
