<!-- demo-button @XuDon -->
<template>
  <div class="demo-button">
    <h2>Feature Button</h2>
    <!-- 测试大小 -->
    <pl-button type="text" size="xs" :loading="loading" :icon="icon">测试大小</pl-button>
    <pl-button type="text" size="sm" :loading="loading" :icon="icon">测试大小</pl-button>
    <pl-button type="text" size="md" :loading="loading" :icon="icon">测试大小</pl-button>
    <pl-button type="text" size="lg" :loading="loading" :icon="icon">测试大小</pl-button>
    <pl-button type="text" size="xl" :loading="loading" :icon="icon">测试大小</pl-button>
    <br />
    <br />
    <!-- 测试类型 -->
    <pl-button type="plain">测试类型</pl-button>
    <pl-button type="text">测试类型</pl-button>
    <pl-button type="default">测试类型</pl-button>
    <pl-button type="success">测试类型</pl-button>
    <pl-button type="info">测试类型</pl-button>
    <pl-button type="warning">测试类型</pl-button>
    <pl-button type="danger">测试类型</pl-button>
    <br />
    <br />
    <!-- 测试禁止 -->
    <pl-button type="plain" disabled>测试禁止</pl-button>
    <pl-button type="text" disabled>测试禁止</pl-button>
    <pl-button type="default" disabled>测试禁止</pl-button>
    <pl-button type="success" disabled>测试禁止</pl-button>
    <pl-button type="info" disabled>测试禁止</pl-button>
    <pl-button type="warning" disabled>测试禁止</pl-button>
    <pl-button type="danger" disabled>测试禁止</pl-button>
    <br />
    <br />
    <!-- 测试图标 -->
    <pl-button  icon="pl-icon-edit"></pl-button>
    <pl-button type="primary" icon="pl-icon-share"></pl-button>
    <pl-button type="danger" icon="pl-icon-delete"></pl-button>
    <pl-button type="warning" icon="pl-icon-delete">删除</pl-button>
    <pl-button type="info">上锁 <i class="pl-icon-lock" /></pl-button>
    <br />
    <br />
    <!-- 测试分组 -->
    <pl-button-group>
      <pl-button type="primary" icon="pl-icon-arrow_left">上一页</pl-button>
      <pl-button type="primary">下一页<i class="pl-icon-arrow_right pl-icon--right"></i></pl-button>
    </pl-button-group>
    <br />
    <br />
    <pl-button-group>
      <pl-button type="primary" icon="pl-icon-edit"></pl-button>
      <pl-button type="primary" icon="pl-icon-share"></pl-button>
      <pl-button type="primary" icon="pl-icon-delete"></pl-button>
    </pl-button-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'demo-button',
  setup() {
    const loading = ref(true);
    const icon = ref('');
    setTimeout(() => {
      loading.value = false;
      icon.value = 'pl-icon-success';
    }, 4000);
    return {
      loading,
      icon,
    };
  },
});

</script>

<style lang='scss' scoped>
.demo-button{
  width:70%;
  margin:20px auto;
  box-shadow:0 0 28px #eee;
  padding:40px;
}
button + button{
  margin-left:10px !important;
}
</style>
