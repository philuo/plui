<template>
  <div id="app">
    <div class="flex btn_type">
      <BaseButton msg="默认按钮" type="default"/>
      <BaseButton msg="主要按钮" type="primary"/>
      <BaseButton msg="危险按钮" type="danger"/>
      <BaseButton msg="信息按钮" type="info"/>
      <BaseButton msg="警告按钮" type="warning"/>
    </div>
    <div class="flex btn_type">
      <LoadButton loading  loading-type="" loading-text=""/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from './components/button/base-button.vue';
import LoadButton from './components/button/load-button.vue';

export default defineComponent({
  components: {
    BaseButton, LoadButton,
  },
  setup() {
    return {

    };
  },
});


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
