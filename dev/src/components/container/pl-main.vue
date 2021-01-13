<!-- pl-main @Perfumere -->
<template>
    <main class="pl-main">
        <slot />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'pl-main'
});
</script>

<style lang="scss" scoped>
@import '../../style/pl-main';
</style>
