<template>
  <div id="app">
    <div class="demo-layout">
      <h2>Layout Demo</h2>
      <pl-row gutter="20">
        <pl-col>
          <div class="content bg-purple-dark">default</div>
        </pl-col>
      </pl-row>

      <pl-row>
        <pl-col span="24">
          <div class="content bg-purple">span:24</div>
        </pl-col>
      </pl-row>

      <pl-row>
        <pl-col span="12">
          <div class="content bg-purple">span:12</div>
        </pl-col>
        <pl-col span="6">
          <div class="content bg-purple-light">span:6</div>
        </pl-col>
        <pl-col span="6">
          <div class="content bg-purple">span:6</div>
        </pl-col>
      </pl-row>

      <pl-row gutter="10" type="flex" justify="center">
        <pl-col span="12">
          <div class="bg-purple-light">
            <pl-row type="flex" align="center">
              <pl-col span="6">
                <div class="content bg-purple-dark">span:12 > span6 </div>
              </pl-col>
              <pl-col span="12" offset="6">
                <div class="content2 bg-purple">span:12 > span:12 + offset6</div>
              </pl-col>
            </pl-row>
          </div>
        </pl-col>

        <pl-col span="8">
          <div class="content bg-purple-light">span:8</div>
        </pl-col>
      </pl-row>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PlRow from './components/layout/pl-row.vue';
import PlCol from './components/layout/pl-col.vue';

export default defineComponent({
  name: 'app',
  components: {
    PlRow,
    PlCol,
  },

  setup() {
    return {

    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style/bg-color";

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
     height: 36px;
     line-height: 36px;
     text-align:center;
  }
  .content2{
    height: 80px;
  }
}
</style>
