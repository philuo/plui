<template>
  <div class="pl-mouse">
    <p>x:{{x}}</P>
    <p>y:{{y}}</P>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, reactive,
  toRefs, onMounted, onUnmounted,
} from 'vue';

export default defineComponent({
  name: 'pl-mouse',
  props: {
    message: {
      type: String,
      default: 'Hello Philuo~',
    },
  },
  setup(props, context) {
    interface Position{
      x: number;
      y: number;
    }
    console.log(props, context);
    const refVal = ref<number>(0);
    const pos = reactive<Position>({
      x: 0,
      y: 0,
    });
    const ShowPosition = (event) => {
      pos.x = event.pageX;
      pos.y = event.pageY;
    };
    onMounted(() => {
      document.addEventListener('mousemove', ShowPosition);
    });
    onUnmounted(() => {
      document.removeEventListener('mousemove', ShowPosition);
    });
    return {
      refVal,
      inc() {
        refVal.value += 1;
      },
      ...toRefs<Position>(pos),
    };
  },
});
</script>

<style lang="scss" scoped>
.pl-mouse{
  width: 200px;
  height: 200px;
  margin:100px auto;
  p{
    font-size:30px;
    color:rgb(28, 97, 209)
  }
}
</style>
