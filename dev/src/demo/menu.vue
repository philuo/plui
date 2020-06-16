<!-- demo-menu @Perfumere -->
<template>
  <div class="demo-menu">
    <pl-menu
      @logo-click="handleLogoClick"
      @main-click="handleMainSelect"
      @icons-click="handleActionClick"
      @icons-hover="handleActionHover"
      @select="handleSelect"
      @search="handleSearch"
      @write="handleInput"
      @query="handleQuery"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'demo-menu',
  setup() {
    // 搜索框下拉 ，在此RPC的方法以及提示面板panel中的数据，切换type
    const handleSelect = ({ oldItem, newItem }) => { console.log('@select 改变ajax地址', oldItem, newItem); };
    // 键入回车或者点击🔍图标
    const handleSearch = () => { console.log('@search 发送ajax请求'); };
    // 输入框书写内容
    const handleInput = (value) => { console.log('@write 修改响应数据,通过绑定一个响应式数据实现懒更新', value); };
    // 处理右侧icons图标族的点击事件
    const handleActionClick = (url) => {
      console.log('@icons-click', url);
      if (url) {
        // 开发时使用vue-router，做spa
        // location.href = url;
      }
    };
    // 处理右侧icons图标族的浮动事件
    const handleActionHover = (url) => {
      console.log('@icons-hover', url);
      if (url) {
        // 开发时使用vue-router，做spa
        // location.href = url;
      }
    };
    // 处理顶栏个人头像菜单项的点击，在此做跳转
    const handleMainSelect = (item) => {
      console.log('@action', item);
    };
    // 处理logo点击
    const handleLogoClick = () => {
      console.log('@logo-click', '返回home页面');
    };
    // 处理panel点击
    const handleQuery = (item) => {
      console.log('@query', '选项卡点击了，跳转页面', item);
    };
    return {
      handleSelect,
      handleSearch,
      handleInput,
      handleActionClick,
      handleActionHover,
      handleQuery,
      handleLogoClick,
      handleMainSelect,
    };
  },
});
</script>
