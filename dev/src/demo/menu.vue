<!-- demo-menu @Perfumere -->
<template>
  <div class="demo-menu">
    <h2>Typeset Menu</h2>
    <pl-menu>
      <pl-menu-item>PLog</pl-menu-item>
      <pl-menu-item>菲络社区</pl-menu-item>
      <pl-menu-item>


      </pl-menu-item>
      <pl-menu-item>
        <pl-search :items="items"
          @change="handleChange"
          @search="handleSearch"
          @write="handleInput"
        />
      </pl-menu-item>
    </pl-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'demo-menu',
  setup() {
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
    const handleChange = (oldItem, newItem) => { console.log('change 改变ajax地址', oldItem, newItem); };
    const handleSearch = () => { console.log('search 发送ajax请求'); };
    const handleInput = (value) => { console.log('input 修改响应数据,通过绑定一个响应式数据实现懒更新', value); };
    return {
      items,
      handleChange,
      handleSearch,
      handleInput,
    };
  },
});

</script>

<style lang='scss' scoped>
.demo-menu{
  width:70%;
  margin:20px auto;
  box-shadow:0 0 28px #eee;
  padding:40px;
}
</style>
