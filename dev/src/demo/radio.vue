<!--  -->
<template>
  <div class="demo-nav">
    <h2>Radio</h2>
    <div class="flex">
      <div class="radioContaniner">
        <p>默认样式1</p>
        <pl-radio :msg="['文本1', '文本2']" group="group1"/>
      </div>
      <div class="radioContaniner">
        <p>默认样式2</p>
        <pl-radio :msg="['文本1', '文本2', '文本3']" group="group2"/>
      </div>
      <div class="radioContaniner">
        <p>禁用状态</p>
        <pl-radio :msg="['文本1', '文本2', '文本3']" group="group3" disable/>
      </div>
      <div class="radioContaniner">
        <p>带边框</p>
        <pl-radio :msg="['文本1', '文本2', '文本3']" group="group4" border/>
      </div>
      <div class="radioContaniner">
        <p>单选在前</p>
        <pl-radio :msg="['文本1', '文本2', '文本3']" group="group5" border front/>
      </div>
      <div class="radioContaniner">
        <p>按钮样式</p>
        <pl-radio-button :msg="['文本1', '文本2', '文本3']" group="group3" />
        <pl-radio-button :msg="['文本1', '文本2', '文本3']" group="group3" size="medium"
          style="margin-top: 10px"/>
        <pl-radio-button :msg="['文本1', '文本2', '文本3']" group="group3" size="small"
          style="margin-top: 10px"/>
        <pl-radio-button :msg="['文本1', '文本2', '文本3']" group="group3" size="mini"
          style="margin-top: 10px"/>
        <pl-radio-button :msg="['文本1', '文本2', '文本3']" group="group3" size="mini"
          style="margin-top: 10px" disable/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'demo-radio',
  setup() {
    return {

    };
  },
});

</script>

<style lang='scss' scoped>
.flex {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 10px;
  }
  .radioContaniner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .radioContaniner + .radioContaniner{
    margin-top: 20px;
  }
}
.demo-nav {
  width:70%;
  margin:20px auto;
  box-shadow:0 0 28px #eee;
  padding:40px;
}
</style>
