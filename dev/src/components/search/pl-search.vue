<!-- pl-search @Perfumere -->
<template>
  <div class="pl-search">
    <div class="pl-search-left" :class="open && 'is-open'" @click="handleClick">
      <div class="pl-select-button" @blur="handleBlur" tabindex="-1">
        <span>{{ selectItem.description }}</span>
        <i class="pl-icon-arrow_down"/>
      </div>
      <ul class="pl-select-group">
        <li v-for="(item,index) in selectGroup" :key="item.name"
        @click="handleSelect(item,index)">
          {{item.description}}
        </li>
      </ul>
    </div>
    <div class="pl-search-right">
      <input v-for="item in selectItems" :key="item.name" autocomplete="off"
        :name="item.name" :type="item.checked?'text':'hidden'"
        :class="item.checked && 'is-show'"
        :placeholder="item.placeholder"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
        @input="handleInput"
        @keydown="handelEnter"
      />
      <i class="pl-icon-search_bar" @click="handleConfirm" ref="searchIcon"/>
    </div>
    <div class="pl-search-main" :class="searchPanel && 'is-open'">
      <ul class="pl-search-group">
        <li class="search-group-item" v-if="!data.length">未查询到相关数据</li>
        <li class="search-group-item" v-else v-for="item in data" :key="item.id"
          @click="handlePanelClick(item)"
        >
          {{item.description}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import setup from '../../utils/computed/search';

export default defineComponent({
  name: 'pl-search',
  props: {
    items: {
      type: Array,
      default: () => [{
        placeholder: 'issus',
        name: 'issue',
        description: '问题解决',
        checked: true, // 根据这个决定input的type为text/hidden 以及是否添加is-show类
      }, {
        placeholder: 'fandation',
        name: 'fandation',
        description: '编程基础',
        checked: false,
      }],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup,
});

</script>

<style lang='scss' scoped>
  @import '../../style/pl-search';
</style>
