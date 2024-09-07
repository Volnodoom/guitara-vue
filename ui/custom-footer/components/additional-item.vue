<template>
  <li class="footer__nav-list-item">
    <a
      class="link"
      :href="link"
    >{{ title }}</a>
  </li>
</template>

<script setup lang="ts">
type AdditionalItemProps = {
  link?: string
  title: string
};

const { link = '#top', title } = defineProps<AdditionalItemProps>();
</script>
