<!-- pl-menu @Perfumere -->
<template>
<ul class="pl-menu">
  <template v-if="isMenuItem">
    <slot />
  </template>
  <template v-else>
  <!-- 子组件中含有非pl-menu-item项，渲染以下默认占位 -->
      <li class="pl-menu-item pl-menu-logo">
        <img src="../../assets/image/icon/logo.jpg" class="pl-menu-logo"
          ondragstart="return false;"
        >
      </li>
      <li class="pl-menu-item pl-menu-text">PLog</li>
      <li class="pl-menu-item pl-menu-search">
        <pl-search :items="items"
          @select="handleSelect"
          @search="handleSearch"
          @write="handleInput"
        />
      </li>
      <li class="pl-menu-item pl-menu-icons">
        <div class="menu-item-icon-0">
          <pl-icon name="theme_system"  @action="handleAction('/theme')" />
        </div>
        <div class="menu-item-icon-1">
          <pl-icon name="write_system" @action="handleAction('/edit')"/>
        </div>
        <div class="menu-item-icon-2">
          <pl-icon name="info_system" @action="handleAction('/info')"/>
        </div>
      </li>
      <li class="pl-menu-item">
        <div class="menu-item-icon-3">
          <pl-icon name="more_item" @action="handleAction('#')"/>
        </div>
      </li>
      <li class="pl-menu-item pl-menu-head">
        <pl-dropdown />
      </li>
  </template>
</ul>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import PlSearch from '../search/pl-search.vue';
import PlIcon from '../icon/pl-icon.vue';
import { isMenuItem } from '../../utils/computed/menu';
import stubAvatar from '../../assets/image/icon/logo.jpg';

export default defineComponent({
  name: 'pl-menu',
  props: {
    src: {
      type: String,
      default: stubAvatar,
    },
  },
  components: {
    PlIcon,
    PlSearch,
  },
  setup(props, { slots }) {
    const items = reactive([
      {
        placeholder: 'foundation',
        name: 'foundation',
        description: '语言基础',
        checked: true, // 根据这个决定input的type为text/hidden 以及是否添加is-show类
      }, {
        placeholder: 'design',
        name: 'design',
        description: '软件开发',
        checked: false,
      }, {
        placeholder: 'database',
        name: 'database',
        description: '数据库',
        checked: false,
      }, {
        placeholder: 'netwowrk',
        name: 'netwowrk',
        description: '网络',
        checked: false,
      }, {
        placeholder: 'road',
        name: 'road',
        description: '学习路线',
        checked: false,
      }, {
        placeholder: 'case',
        name: 'case',
        description: '开发案例',
        checked: false,
      }, {
        placeholder: 'issue',
        name: 'issue',
        description: '问题解决',
        checked: false,
      },
    ]);
    const handleSelect = ({ oldItem, newItem }) => { console.log('@select 改变ajax地址', oldItem, newItem); };
    const handleSearch = () => { console.log('@search 发送ajax请求'); };
    const handleInput = (value) => { console.log('@write 修改响应数据,通过绑定一个响应式数据实现懒更新', value); };
    const handleAction = (url) => {
      if (url) {
        // 开发时使用vue-router，做spa
        // location.href = url;
      }
    };
    return {
      items,
      handleSelect,
      handleSearch,
      handleInput,
      handleAction,
      isMenuItem: isMenuItem(slots),
    };
  },
});

</script>

<style lang='scss' scoped>
  @import '../../style/pl-menu';
</style>
