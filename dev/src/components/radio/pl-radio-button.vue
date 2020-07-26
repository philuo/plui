<!-- pl-radio-button @XuDon -->
<template>
  <div class="app">
    <div class="container" v-for="(item, index) in msg" :key="index" @click="checked(index)">
        <button :for="item + group"
          :class="[disable ? 'disable' : 'default',
          checkedIndex === index && !disable ? 'checked' : 'no-checked',
          size]" :value="item">{{ item }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'pl-radio',
  props: {
    msg: {
      type: Array,
    },
    group: {
      type: String,
      default: '',
    },
    disable: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      defalut: '',
    },
  },
  setup(props) {
    const state = reactive({
      checkedIndex: -1,
    });
    function checked(index: number) {
      if (props.disable) return;
      state.checkedIndex = index;
    }
    return {
      ...toRefs(state), checked,
    };
  },
});

</script>

<style lang='scss' scoped>
@import '../../style/pl-radio-button';
</style>
