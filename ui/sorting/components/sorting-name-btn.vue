<template>
  <button
    class="catalog-sort__type-button"
    :aria-label="name"
  >
    {{ name }}
  </button>
</template>

<script setup lang="ts">
type SortingNameBtnProps = {
  name: string
};

defineProps<SortingNameBtnProps>();
</script>
