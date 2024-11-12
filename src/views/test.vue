<template>
  <div class="text-red-500 w-20 h-10">test page</div>
  <Button type="primary">test {{ $t('common.hello') }}</Button>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue';
import useStore from '@/store';

const { home } = useStore();
console.log(home.count);
</script>

<style scoped lang="scss"></style>
