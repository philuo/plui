<template>
    <demo-menu />
    <div class="overflow-view">
        <demo-card />
        <demo-icon />
        <demo-layout />
        <demo-container />
        <demo-button />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { demoLayout, demoContainer, demoMenu, demoButton, demoCard, demoIcon } from './demo';

export default defineComponent({
    components: {
        demoLayout,
        demoContainer,
        demoMenu,
        demoButton,
        demoCard,
        demoIcon
    }
});
</script>
<style lang="scss">
.overflow-view {
    height: calc(100vh - 58px);
    overflow: auto;
}
</style>
