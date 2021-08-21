<template>
    <div class="demo-layout">
        <pl-card />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'demo-card'
});
</script>

<style lang="scss" scoped>
.demo-layout {
    width: 70%;
    margin: 20px auto;
    box-shadow: 0 0 28px #eee;
    padding: 40px;
}
</style>
