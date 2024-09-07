<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <NavigationItem
        v-for="({ name, link, isActive }, index) in navList"
        :key="index"
        :link="link"
        :name="name"
        :is-active="isActive"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import NavigationItem from '~/ui/custom-header/components/navigation-item.vue';

const navList = [
  {
    name: 'Каталог',
    link: '#',
    isActive: true,
  },
  {
    name: 'Где купить?',
    link: '#',
    isActive: false,
  },
  {
    name: 'О компании',
    link: '#',
    isActive: false,
  },
];
</script>
