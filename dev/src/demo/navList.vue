<!--  -->
<template>
  <div class="demo-nav-list">
    <h2>Nav List</h2>
    <span>竖排</span>
    <pl-nav-list>
      <pl-nav-list-item>jj</pl-nav-list-item>
    </pl-nav-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'demo-nav-list',
  setup() {
    return {

    };
  },
});

</script>

<style lang='scss' scoped>
.demo-nav-list{
  width:70%;
  margin:20px auto;
  box-shadow:0 0 15px #eee;
  padding:40px;

}
.demo-nav-list:hover{
  box-shadow:0 0 28px #eee;
}
</style>
