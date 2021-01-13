<!-- pl-menu-item @Perfumere -->
<template>
    <li class="pl-menu-item">
        <slot />
    </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'pl-menu-item'
});
</script>

<style lang="scss" scoped>
@import '../../style/pl-menu-item';
</style>
