<!-- pl-container @Perfumere -->
<template>
    <section class="pl-container" :class="getContainerClassList">
        <slot />
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import getContainerClassList from '../../utils/computed/container';

export default defineComponent({
    name: 'pl-container',
    props: {
        direction: {
            type: String,
            default: ''
        }
    },

    setup(props, { slots }) {
        return {
            getContainerClassList: getContainerClassList(props, slots)
        };
    }
});
</script>

<style lang="scss" scoped>
@import '../../style/pl-container';
</style>
