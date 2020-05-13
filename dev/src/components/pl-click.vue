<template>
  <div class="pl-click">
    <p>{{message}}</p>
    <p>refVal:{{refVal}}</p>
    <button @click="inc">++ref</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'pl-click',
  props: {
    message: {
      type: String,
      default: 'Hello Philuo~',
    },
  },
  setup() {
    const refVal = ref(0);
    return {
      refVal,
      inc() {
        refVal.value += 1;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.pl-click{
  width: 200px;
  height: 200px;
  margin:100px auto;
  p:first-of-type{
    font-size:30px;
    color:rgb(28, 97, 209)
  }
}
</style>
