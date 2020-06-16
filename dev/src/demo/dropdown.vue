<!-- demo-dropdown @Perfumere -->
<template>
  <div class="demo-dropdown">
    <h2>Feature Dropdown</h2>
    <pl-dropdown @action="handleAction"/>
    <pl-dropdown :items="[
        { name: '1', description: '项目1', href: '/xxx/1' },
        { name: '2', description: '项目2', href: '/xxx/2' },
        { name: '3', description: '项目3', href: '/xxx/2' },
        { name: '4', description: '项目4', href: '/xxx/3' },
        { name: '5', description: '项目5', href: 'xxx//4' },
        { name: '6', description: '项目6', href: '/xxx/6' },
      ]" trigger="hover"/>
   </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'demo-dropdown',
  setup() {
    return {
      handleAction: (item) => {
        console.log(item);
      },
    };
  },
});

</script>

<style lang='scss' scoped>
.demo-dropdown{
  display: flex;
  justify-content: space-around;
  width:70%;
  margin:20px auto;
  box-shadow:0 0 28px #eee;
  padding:40px;
}
</style>
