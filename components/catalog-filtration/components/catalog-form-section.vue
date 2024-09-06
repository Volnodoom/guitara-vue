<template>
  <fieldset class="catalog-filter__block">
    <legend class="catalog-filter__block-title">
      {{ sectionName }}
    </legend>
    <slot />
  </fieldset>
</template>

<script setup lang="ts">
type CatalogSectionType = {
  sectionName: string
};

defineProps<CatalogSectionType>();
</script>
