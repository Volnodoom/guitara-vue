<template>
  <ul class="breadcrumbs page-content__breadcrumbs">
    <BreadcrumbsItem
      v-for="item in mockData"
      :key="item.text"
      :link="item.link"
      :text="item.text"
    />
  </ul>
</template>

<script setup lang="ts">
import BreadcrumbsItem from '~/ui/breadcrumbs/components/breadcrumbs-item.vue';

const mockData = [
  {
    text: 'Главная',
    link: '/',
  },
  {
    text: 'Каталог',
    link: '/',
  },
];
</script>
