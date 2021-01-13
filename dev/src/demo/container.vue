<!-- demo-container @Perfumere-->
<template>
    <div class="demo-container">
        <h2>Layout Container</h2>
        <pl-container>
            <pl-header>Header</pl-header>
            <pl-main>Main</pl-main>
        </pl-container>
        <br />
        <pl-container>
            <pl-header>Header</pl-header>
            <pl-main>Main</pl-main>
            <pl-footer>Footer</pl-footer>
        </pl-container>
        <br />
        <pl-container>
            <pl-aside width="120px">Aside</pl-aside>
            <pl-main>Main</pl-main>
        </pl-container>
        <br />
        <pl-container>
            <pl-header>Header</pl-header>
            <pl-container>
                <pl-aside>Aside</pl-aside>
                <pl-main>Main</pl-main>
            </pl-container>
        </pl-container>
        <br />
        <pl-container>
            <pl-header>Header</pl-header>
            <pl-container>
                <pl-aside width="200px">Aside</pl-aside>
                <pl-container>
                    <pl-main>Main</pl-main>
                    <pl-footer>Footer</pl-footer>
                </pl-container>
            </pl-container>
        </pl-container>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'demo-container'
});
</script>

<style lang="scss">
.demo-container {
    width: 70%;
    margin: 20px auto;
    box-shadow: 0 0 28px #eee;
    padding: 40px;

    .pl-header,
    .pl-footer {
        background-color: #54677e;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .pl-footer {
        background-color: #bdc3c7;
    }
    .pl-aside {
        background-color: #d3dce6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    .pl-main {
        background-color: #e9eef3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    .pl-container:nth-child(5) .pl-aside,
    .pl-container:nth-child(6) .pl-aside {
        line-height: 260px;
    }
    .pl-container:nth-child(7) .pl-aside {
        line-height: 320px;
    }
}
</style>
