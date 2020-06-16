<!-- pl-menu @Perfumere -->
<template>
<ul class="pl-menu">
  <template v-if="isMenuItem">
    <slot />
  </template>
  <template v-else>
  <!-- 子组件中含有非pl-menu-item项，渲染以下默认占位 -->
      <li class="pl-menu-item pl-menu-logo" @click="handleLogoClick">
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
          @query="handleQuery"
        />
      </li>
      <li class="pl-menu-item pl-menu-icons">
        <div class="menu-item-icon-0">
          <pl-icon name="theme_system"
          @action-click="handleActionClick('/theme')"
          @action-hover="handleActionHover('/theme')"/>
        </div>
        <div class="menu-item-icon-1">
          <pl-icon name="write_system"
          @action-click="handleActionClick('/edit')"
          @action-hover="handleActionHover('/edit')"/>
        </div>
        <div class="menu-item-icon-2">
          <pl-icon name="info_system"
          @action-click="handleActionClick('/info')"
          @action-hover="handleActionHover('/info')"/>
        </div>
      </li>
      <li class="pl-menu-item">
        <div class="menu-item-icon-3">
          <pl-icon name="more_item"
          @action-click="handleActionClick('#')"
          @action-hover="handleActionHover('#')"/>
        </div>
      </li>
      <li class="pl-menu-item pl-menu-head">
        <pl-dropdown @action="handleMainSelect"/>
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
  setup(props, ctx) {
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
    return {
      items,
      handleSelect: (item) => ctx.emit('select', item),
      handleSearch: () => ctx.emit('search'),
      handleQuery: (item) => ctx.emit('query', item),
      handleInput: (value) => ctx.emit('write', value),
      handleActionClick: (url) => ctx.emit('icons-click', url),
      handleActionHover: (url) => ctx.emit('icons-hover', url),
      handleLogoClick: () => ctx.emit('logo-click'),
      handleMainSelect: (item) => ctx.emit('main-click', item),
      isMenuItem: isMenuItem(ctx.slots),
    };
  },
});

</script>

<style lang='scss' scoped>
  @import '../../style/pl-menu';
</style>
