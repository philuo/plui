<template>
  <div id="app">
    <div class="flex btn_type">
      <pl-button msg="默认按钮" type="default"/>
      <pl-button msg="主要按钮" type="primary"/>
      <pl-button msg="危险按钮" type="danger"/>
      <pl-button msg="信息按钮" type="info"/>
      <pl-button msg="警告按钮" type="warning"/>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});

</script>

<style lang="scss">
.flex{
  display: flex;
}
.btn_type :nth-child(n){
  margin: 0 10px;
}
</style>
