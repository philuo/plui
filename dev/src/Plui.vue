<template>
  <div id="app">
    <div class="flex btn_type">
      <BaseButton msg="默认按钮"/>
      <primaryButton msg="主要按钮" />
      <dangerButton msg="危险按钮" />
      <infoButton msg="信息按钮" />
      <warningButton msg="警告按钮" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from './components/button/base-button.vue';
import primaryButton from './components/button/primary-button.vue';
import dangerButton from './components/button/danger-button.vue';
import infoButton from './components/button/info-button.vue';
import warningButton from './components/button/warning-button.vue';

export default defineComponent({
  components: {
    BaseButton, primaryButton, dangerButton, infoButton, warningButton,
  },
  setup() {
    return {

    };
  },
});


</script>

<style lang="scss">
.flex{
  display: flex;
}
.btn_type :nth-child(n){
  margin: 0 10px;
}
</style>
