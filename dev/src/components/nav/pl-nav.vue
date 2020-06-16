<!-- pl-nav @XuDon -->
<template>
  <nav class="pl-nav">
    <ul>
      <li v-for="(item,index) in navList" :key="index" v-color="color" v-bg="bg"
      :class="{'isclick': state.status[index],'disabled': item.disabled}" class="parent">
        <span class="title" @click="change(index)">{{ item.name }}</span>
        <ul v-if="item.children">
          <li v-for="(navItem,i) in item.children" :key="i" class="children">{{ navItem }}</li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'pl-nav',
  props: {
    navList: {
      type: Array,
      default: () => [],
    },
    color: {
      type: String,
      default: '',
    },
    bg: {
      type: String,
      default: '',
    },
    disabled: {
      type: String,
      defalut: 'disabled',
    },
  },
  directives: {
    color: {
      mounted(el, binding) {
        el.style.color = binding.value;
      },
    },
    bg: {
      mounted(el, binding) {
        el.style.background = binding.value;
      },
    },
  },
  setup(props) {
    const state = reactive({
      status: new Array(props.navList.length).fill(false),
    });
    function change(index) {
      for (let i = 0; i < state.status.length; i += 1) {
        if (i !== index) {
          state.status[i] = false;
        }
      }
      state.status[index] = !state.status[index];
    }
    return {
      state, change,
    };
  },
});

</script>

<style lang='scss' scoped>
  @import '../../style/pl-nav';
</style>
