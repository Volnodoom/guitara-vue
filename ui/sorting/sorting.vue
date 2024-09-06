<template>
  <h2 class="catalog-sort__title">
    Сортировать:
  </h2>
  <div class="catalog-sort__type">
    <SortingNameBtn name="по цене" />
    <SortingNameBtn name="по популярности" />
  </div>

  <div class="catalog-sort__order">
    <button
      class="catalog-sort__order-button catalog-sort__order-button--up"
      aria-label="По возрастанию"
    />
    <button
      class="catalog-sort__order-button catalog-sort__order-button--down"
      aria-label="По убыванию"
    />
  </div>
</template>

<script setup lang="ts">
import SortingNameBtn from '~/ui/sorting/components/sorting-name-btn.vue';
</script>
