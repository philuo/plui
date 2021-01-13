<!-- pl-button-group @Perfumere -->
<template>
    <div class="pl-button-group">
        <slot />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'pl-button-group'
});
</script>

<style lang="scss" scoped>
@import '../../style/pl-button-group';
</style>
