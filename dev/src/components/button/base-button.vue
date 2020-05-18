<template>
  <div>
    <button :class="[typeClass,btn]">{{ msg }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

interface Data{
  typeClass: string;
  btn: string;
}
export default defineComponent({
  name: 'base-button',
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
.default:active{
  color: #51a2ff;
  background: #ecf5ff;
  border: 1px solid lightblue;
}
.default:hover{
  color: #51a2ff;
  background: #ecf5ff;
}
.danger{
  background-color: rgb(236, 26, 26);
  color: white;
}
.danger:active{
  color: #eaeaea;
  background-color: #ce280a;
  border: 1px solid #ce280a;
}
.danger:hover{
  color: #eaeaea;
  background: #ce280a;
}
.info{
  background-color: #909399;
  color: white;
}
.info:active{
  color: #eaeaea;
  background: #727479;
  border: 1px solid #727479;
}
.info:hover{
  color: #eaeaea;
  background: #727479;
}
.primary{
  background-color: #07c160;
  color: white;
}
.primary:active{
  color: #eaeaea;
  background: #06ae57;
  border: 1px solid #06ae57;
}
.primary:hover{
  color: #eaeaea;
  background: #06ae57;
}
.warning{
  background-color: #E6A23C;
  color: white;
}
.warning:active{
  color: #eaeaea;
  background: rgb(185, 130, 47);
  border: 1px solid rgb(185, 130, 47);
}
.warning:hover{
  color: #eaeaea;
  background: rgb(185, 130, 47);
}
</style>
