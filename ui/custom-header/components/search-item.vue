<template>
  <li
    class="form-search__select-item"
    tabindex="0"
  >
    {{ name }}
  </li>
</template>

<script setup lang="ts">
type SearchItemProps = {
  name: string
};
defineProps<SearchItemProps>();
</script>
