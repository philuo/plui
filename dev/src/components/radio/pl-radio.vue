<!-- pl-radio @XuDon -->
<template>
  <div class="app">
    <div :class="['container', border ? 'border' : '', front ? 'front' : '']"
      v-for="(item, index) in msg" :key="index" >
        <label :for="item + group" @click="checked(index)"
          :class="[disable ? 'disable' : 'default',
          checkedIndex === index ? 'checked' : '']">{{ item }}</label>
        <input type="radio" :name="group" :id="item + group"
          :class="disable ? 'disable' : 'default'" :disabled="disable"
        />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'pl-radio',
  props: {
    // 单选文本数组
    msg: {
      type: Array,
    },
    // 单选组
    group: {
      type: String,
      default: '',
    },
    // 是否可用
    disable: {
      type: Boolean,
      default: false,
    },
    // 是否带边框
    border: {
      type: Boolean,
      default: false,
    },
    // 是否带边框
    front: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const state = reactive({
      checkedIndex: -1,
    });
    function checked(index: number) {
      state.checkedIndex = index;
    }
    return {
      ...toRefs(state), checked,
    };
  },
});

</script>

<style lang='scss' scoped>
@import '../../style/pl-radio';
</style>
