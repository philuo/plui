<template>
  <div>
    <button @click="handleClick">{{data}}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue';

interface XX {
  data: string;
  count: number;
}
export default defineComponent({
  name: 'base-button',
  setup() {
    const message = reactive<XX>({
      data: 'Hello Perfumere',
      count: 0,
    });
    const handleClick = () => {
      if (message.count % 2) {
        message.data = 'Hello XaDon';
      } else {
        message.data = 'Hello Perfumere';
      }
      message.count += 1;
    };
    return {
      ...toRefs(message),
      handleClick,
    };
  },
});
</script>

<style lang="scss">

</style>
