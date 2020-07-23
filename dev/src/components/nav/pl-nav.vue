<!-- pl-nav @XuDon -->
<template>
  <nav class="pl-nav">
    <ul>
      <li v-for="(item,index) in navList" :key="index" v-color="color" v-bg="bg"
      :class="{'isclick': index === activeIndex,'disabled': item.disabled}" class="parent">
        <span class="title" @click="change(index)">{{ item.name }}</span>
        <ul v-if="item.children.length != 0">
          <li v-for="(navItem,i) in item.children" :key="i" class="children">{{ navItem }}</li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
      activeIndex: -1,
    });
    function change(index) {
      if (state.activeIndex === index) {
        state.activeIndex = -1;
      } else {
        state.activeIndex = index;
      }
    }
    return {
      ...toRefs(state), change,
    };
  },
});

</script>

<style lang='scss' scoped>
  @import '../../style/pl-nav';
</style>
