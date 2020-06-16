<template>
  <div class="demo-nav">
    <h2>Nav</h2>
    <div class="flex">
      <pl-nav :navList="navList"
        :color="'white'" :bg="'#a3aeee'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'demo-nav',
  setup() {
    const state = reactive({
      navList: [
        {
          name: '导航1',
          children: ['导航1-1', '导航1-2', '导航1-3'],
        },
        {
          name: '导航2',
          children: [],
        },
        {
          name: '导航3',
          children: ['导航3-1', '导航3-2', '导航3-3'],
        },
        {
          name: '导航4',
          children: [],
          disabled: true,
        },
      ],
    });
    return toRefs(state);
  },
});
</script>

<style lang="scss">
.flex{
  display: flex;
  justify-content: space-around;
}
.demo-nav{
  width:70%;
  margin:20px auto;
  box-shadow:0 0 28px #eee;
  padding:40px;
}
</style>
