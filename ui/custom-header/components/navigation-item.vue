<template>
  <li>
    <a
      class="link main-nav__link"
      :class="{ 'link--current': isActive }"
      :href="link"
    >{{ name }}</a>
  </li>
</template>

<script setup lang="ts">
type NavigationItemProps = {
  isActive: boolean
  link: string
  name: string
};

defineProps<NavigationItemProps>();
</script>
