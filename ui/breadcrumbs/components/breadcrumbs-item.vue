<template>
  <li class="breadcrumbs__item">
    <NuxtLink
      class="link"
      :href="link"
    >
      {{text}}
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
type breadcrumbsItemType = {
  text: string
  link: string
};

defineProps<breadcrumbsItemType>();
</script>
