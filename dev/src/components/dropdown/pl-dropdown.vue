<!-- pl-dropdown @Perfumere -->
<template>
  <div class="pl-dropdown" v-if="$slots.default">
    <slot v-if="$slots.default"/>
  </div>
  <div class="pl-dropdown" tabindex="-1"
    @blur="handleBlur"
    @mouseenter="trigger && handleAction('enter')"
    @mouseleave="trigger && handleAction('leave')" v-else>
    <div class="pl-dropdown-head"
      @click="!trigger && handleAction('click')">
       <img src="../../assets/image/icon/logo.jpg"
       class="pl-menu-avatar"
       ondragstart="return false;">
        <pl-icon name="caret_bottom" :className="open ?'gray-icon':''"/>
    </div>
    <div class="pl-dropdown-body" v-show="open">
      <div>
        <div class="dropdown-body-item"
        v-for="(item,index) in items" :key="item.name"
        @click="handleClick(item)"
      >
        {{item.description}}
        <div v-if="showLineOfBody(index)" class="dropdown-body-line"></div>
      </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'pl-dropdown',
  props: {
    trigger: {
      type: String,
      default: '', // 默认click，有值则使用hover
    },
    items: {
      type: Array,
      default: () => [
        { name: 'homepage', description: '主页', href: '/homepage' },
        { name: 'article', description: '文章', href: '/homepage/article' },
        { name: 'focus', description: '关注', href: '/homepage/focus' },
        { name: 'store', description: '收藏夹', href: '/homepage/store' },
        { name: 'setting', description: '账号设定', href: 'homepage//setting' },
        { name: 'logout', description: '退出登录', href: '/logout' },
      ],
    },
  },
  setup(props, ctx) {
    const open = ref(false);
    const handleAction = (name: string) => {
      switch (name) {
        case 'click':
          open.value = !open.value;
          break;
        case 'enter':
          open.value = true;
          break;
        case 'leave':
          open.value = false;
          break;
        default: break;
      }
    };
    // body中是否呈现分割线
    const showLineOfBody = (index) => index % 2 && index < props.items.length - 1;
    // 处理list菜单中被点击的项
    const handleClick = (item) => {
      console.log(item);
      ctx.emit('action', item);
      open.value = false;
    };
    const handleBlur = () => {
      open.value = false;
    };
    return {
      open,
      handleAction,
      showLineOfBody,
      handleClick,
      handleBlur,
    };
  },
});

</script>

<style lang='scss' scoped>
  @import '../../style/pl-dropdown';
</style>
