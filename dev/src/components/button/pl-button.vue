<!-- pl-button @XuDon -->
<template>
  <button :class="[typeClass,btn]">{{ msg }}</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

interface Data{
  typeClass: string;
  btn: string;
}
export default defineComponent({
  name: 'pl-button',
  props: {
    msg: String,
    type: String,
  },
  setup(props) {
    const state = reactive<Data>({
      typeClass: props.type,
      btn: 'btn',
    });
    switch (state.typeClass) {
      case 'default':
        state.typeClass = 'default';
        break;
      case 'primary':
        state.typeClass = 'primary';
        break;
      case 'info':
        state.typeClass = 'info';
        break;
      case 'danger':
        state.typeClass = 'danger';
        break;
      case 'warning':
        state.typeClass = 'warning';
        break;
      default:
        break;
    }
    return {
      ...state,
    };
  },
});
</script>

<style lang="scss">
@import url('./css/common.css');
</style>
