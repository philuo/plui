<!-- pl-nav @XuDon -->
<template>
  <nav class="pl-nav">
    <img src="" alt="">
    <div>
      nickname
    </div>
    <ul>
      <li>
        <slot></slot>
      </li>
    </ul>
    <div>
      footer
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pl-nav',
});

</script>

<style lang='scss' scoped>
  @import '../../style/pl-nav';
</style>
