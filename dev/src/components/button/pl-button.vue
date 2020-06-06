<!-- pl-button @XuDon -->
<template>
  <button :class="[typeClass,btn]">{{ msg }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Data{
  typeClass: string;
  btn: string;
}
export default defineComponent({
  name: 'pl-button',
  props: {
    msg: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'default',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    switch (props.type) {
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
@import url('../../style/pl-button.scss');
</style>
