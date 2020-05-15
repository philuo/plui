<template>
  <div>
    <button class="btn default">{{ msg }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'base-button',
  props: {
    msg: String,
  },
  setup() {
    const state = reactive({

    });
    return {
      state,
    };
  },
});
</script>

<style lang="scss">
.btn{
  padding: 10px;
  margin: 0;
  background: white;
  color: black;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
}
.default:active{
  color: #51a2ff;
  background: #ecf5ff;
  border: 1px solid lightblue;
}
.default:hover{
  color: #51a2ff;
  background: #ecf5ff;
}
</style>
