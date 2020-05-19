<!-- demo-layout @Perfumere -->
<template>
    <div class="demo-layout">
      <h2>Layout Demo</h2>
      <pl-row type="flex" align="center" justify="center">
        <pl-col :span="12" :sm="{span:0}" :md="{span:6,offset:6}">
          <div class="content bg-purple-light">12->0->6</div>
        </pl-col>
        <pl-col :span="6" :sm="{span:24}" :md="{span:0}">
          <div class="content2 bg-purple">6->24->0</div>
        </pl-col>
        <pl-col :span="6" :sm="{span:0}" :md="{span:12}">
          <div class="content3 bg-purple-dark">6->0->12</div>
        </pl-col>
      </pl-row>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'demo-layout',
});

</script>

<style lang='scss' scoped>
.demo-layout{
  width:70%;
  margin:20px auto;
  box-shadow:0 0 28px #eee;
  padding:40px;
  height: 300px;
  .pl-row + .pl-row{
    margin-top:10px;
  }
   .content {
     border-radius: 4px;
     height: 200px;
     line-height: 36px;
     text-align:center;
  }
  .content2{
    height: 150px;
  }
  .content3{
    height: 200px;
  }
}
</style>
